export function TrustBar() {
  const stats = [
    {
      icon: "⭐",
      title: "4.9 / 5 Rating",
      subtitle: "500+ Verified Islamabad Trips",
    },
    {
      icon: "⏱️",
      title: "100% Punctual Guarantee",
      subtitle: "Chauffeur arrives 15 mins early",
    },
    {
      icon: "✈️",
      title: "24/7 Airport Service",
      subtitle: "Flight tracking & luggage assistance",
    },
    {
      icon: "🛡️",
      title: "Clean & Inspected Fleet",
      subtitle: "Sanitized cars with chilling AC",
    },
  ];

  return (
    <section className="border-y border-[#e7ebf0] bg-white py-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:gap-8">
          {stats.map((stat) => (
            <div
              key={stat.title}
              className="flex items-center gap-3 rounded-[12px] bg-[#f8fafc] p-3.5 transition hover:bg-[#fffdf5] hover:shadow-sm"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[10px] bg-white text-xl shadow-[0_2px_8px_rgba(7,17,31,0.06)] border border-[#eef2f6]">
                {stat.icon}
              </span>
              <div className="min-w-0">
                <p className="truncate text-xs font-bold text-[#07111f] sm:text-sm">
                  {stat.title}
                </p>
                <p className="truncate text-[11px] text-[#64748b] sm:text-xs">
                  {stat.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
