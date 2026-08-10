export default function Card({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      className={`bg-surface border border-line rounded-[var(--radius)] p-4 mb-3 ${className}`}
    >
      {children}
    </section>
  );
}

export function SectionTitle({
  num,
  children,
}: {
  num?: string | number;
  children: React.ReactNode;
}) {
  return (
    <h2 className="flex items-center gap-2 text-[13px] font-extrabold mb-3 text-text">
      {num && (
        <span className="flex items-center justify-center w-5 h-5 rounded-md bg-primary-bg text-primary text-[11px] font-bold">
          {num}
        </span>
      )}
      {children}
    </h2>
  );
}
