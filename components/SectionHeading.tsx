type SectionHeadingProps = {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  label,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <div
      className={`mx-auto max-w-3xl ${
        isCenter ? "text-center" : "text-left"
      }`}
    >
      {label ? (
        <p className="mb-3 text-sm font-semibold uppercase text-[#c89400]">
          {label}
        </p>
      ) : null}
      <h2 className="text-3xl font-semibold leading-tight text-[#07111f] sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-8 text-[#5f6b7a] sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
