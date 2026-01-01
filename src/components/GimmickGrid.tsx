type Gimmick = {
  title: string;
  desc: string;
  actionLabel: string;
  onClick: () => void;
};

export function GimmickGrid({ items }: { items: Gimmick[] }) {
  return (
    <section style={{ marginTop: 22 }}>
      <h2 style={{ margin: "0 0 12px 0", fontSize: "1.4rem" }}>Waldzauber</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: 14,
        }}
      >
        {items.map((g) => (
          <div key={g.title} className="card" style={{ padding: 16 }}>
            <div style={{ fontWeight: 650 }}>{g.title}</div>
            <div className="small" style={{ marginTop: 6, minHeight: 40 }}>
              {g.desc}
            </div>
            <button
              className="btn"
              style={{ marginTop: 12 }}
              onClick={g.onClick}
            >
              {g.actionLabel}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
