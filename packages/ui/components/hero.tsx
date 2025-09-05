export function Hero({ title, subtitle }: { title: string; subtitle?: string }) {
    return (
      <section className="bg-blue-600 text-white p-6 rounded-lg shadow">
        <h1 className="text-3xl font-bold">{title}</h1>
        {subtitle && <p className="mt-2 text-lg">{subtitle}</p>}
      </section>
    );
  }