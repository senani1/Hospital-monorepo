export function Section({ title, className = "", children }: { title: string; className?: string; children: React.ReactNode }) {
    return (
      <section className={`p-4 ${className}`}>
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        {children}
      </section>
    )
  }