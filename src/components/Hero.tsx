type HeroProps = {
  onEnter: () => void;
};

export function Hero({ onEnter }: HeroProps) {
  return (
    <section className="card" style={{ padding: 26 }}>
      <div
        style={{
          display: "flex",
          gap: 18,
          alignItems: "flex-start",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        <div style={{ maxWidth: 640 }}>
          <h1 style={{ margin: 0, fontSize: "2.4rem", letterSpacing: 0.3 }}>
            Morgaines Wald
          </h1>

          <p className="small" style={{ marginTop: 10, fontSize: "1.05rem" }}>
            Ein mondheller Ort stiller Kraft. Tritt ein, atme durch – und lass
            den Nebel ein wenig von der Last mitnehmen.
          </p>

          <div
            style={{
              display: "flex",
              gap: 10,
              marginTop: 16,
              flexWrap: "wrap",
            }}
          >
            <button className="btn btnPrimary" onClick={onEnter}>
              In den Nebel treten
            </button>

            <span className="small" style={{ alignSelf: "center" }}>
              (Du kannst jederzeit zurückkommen, wenn der Tag zu laut wird.)
            </span>
          </div>
        </div>

        <div style={{ minWidth: 220 }}>
          <div className="small" style={{ marginBottom: 8 }}>
            Omen der Nacht
          </div>

          <div
            className="runeGlow"
            style={{
              borderRadius: 16,
              padding: 14,
              border: "1px solid rgba(127,231,255,0.25)",
              background: "rgba(127,231,255,0.06)",
            }}
          >
            „Kraft darf sanft sein.“
          </div>
        </div>
      </div>
    </section>
  );
}
