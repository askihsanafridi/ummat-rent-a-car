"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const revealSelector =
  "main h1, main h2, main article, main form, main figure, [data-reveal], footer > div";

export function SiteMotion() {
  const pathname = usePathname();

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let stop = () => {};

    function setup() {
      stop();
      if (preference.matches || !("IntersectionObserver" in window)) return;

      const seen = new WeakSet<Element>();
      const animations = new Map<Element, Animation>();
      const observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (!entry.isIntersecting) continue;
            observer.unobserve(entry.target);
            const element = entry.target;
            // Never hide an element that a keyboard user is interacting with.
            if (element.contains(document.activeElement)) continue;
            const siblings = Array.from(element.parentElement?.children ?? []);
            const index = element.matches("article, figure") ? siblings.indexOf(element) : 0;
            const animation = element.animate(
              [
                { opacity: 0, transform: "translateY(24px)" },
                { opacity: 1, transform: "translateY(0)" },
              ],
              {
                duration: 650,
                delay: (index % 3) * 80,
                easing: "cubic-bezier(0.22, 1, 0.36, 1)",
                fill: "backwards",
              },
            );
            animations.set(element, animation);
            animation.onfinish = () => animations.delete(element);
          }
        },
        { threshold: 0.08 },
      );

      function scan() {
        document.querySelectorAll(revealSelector).forEach((element) => {
          if (seen.has(element)) return;
          seen.add(element);
          // Animate a card or hero group once, without also animating its heading.
          if (element.parentElement?.closest("article, [data-reveal]")) return;
          observer.observe(element);
        });
      }

      function revealFocused(event: FocusEvent) {
        for (const [element, animation] of animations) {
          if (event.target instanceof Node && element.contains(event.target)) {
            animation.cancel();
            animations.delete(element);
          }
        }
      }

      scan();
      // Route content may arrive after the layout through Next.js streaming.
      const mutations = new MutationObserver(scan);
      mutations.observe(document.body, { childList: true, subtree: true });
      document.addEventListener("focusin", revealFocused);
      stop = () => {
        observer.disconnect();
        mutations.disconnect();
        document.removeEventListener("focusin", revealFocused);
        animations.forEach((animation) => animation.cancel());
        animations.clear();
      };
    }

    setup();
    preference.addEventListener("change", setup);
    return () => {
      stop();
      preference.removeEventListener("change", setup);
    };
  }, [pathname]);

  return null;
}
