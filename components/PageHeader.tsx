type PageHeaderProps = {
  title: string;
  description: string;
};

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <section className="border-b border-[#e9edf3] bg-[#f8fafc]">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <h1 className="max-w-4xl text-4xl font-semibold leading-tight text-[#07111f] sm:text-5xl">
          {title}
        </h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-[#5f6b7a]">
          {description}
        </p>
      </div>
    </section>
  );
}
