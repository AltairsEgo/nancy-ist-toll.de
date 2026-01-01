import type { Rune } from "../data/runes";

type RuneStoneProps = {
  rune: Rune;
  onNext: () => void;
};

export function RuneStone({ rune, onNext }: RuneStoneProps) {
  return (
    <section className="card" style={{ marginTop: 18, padding: 18 }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: 12,
          flexWrap: "wrap",
        }}
      >
        <div>
          <h2 style={{ margin: 0, fontSize: "1.35rem" }}>
            Runenstein:{" "}
            <span className="runeGlow" style={{ color: "var(--rune)" }}>
              {rune.title}
            </span>
          </h2>

          <p className="small" style={{ marginTop: 8 }}>
            Berühre den Stein erneut, wenn du eine neue Botschaft willst.
          </p>
        </div>

        <button className="btn btnPrimary" onClick={onNext}>
          Eine weitere Rune lesen
        </button>
      </div>

      <div
        className="runeGlow"
        style={{
          marginTop: 14,
          padding: 16,
          borderRadius: 16,
          border: "1px solid rgba(127,231,255,0.22)",
          background: "rgba(10, 30, 40, 0.45)",
        }}
      >
        <div
          className="small"
          style={{
            marginBottom: 8,
            letterSpacing: 0.4,
            textTransform: "uppercase",
          }}
        >
          Inschrift
        </div>

        <div style={{ fontSize: "1.2rem", lineHeight: 1.45 }}>
          „{rune.message}“
        </div>
      </div>
    </section>
  );
}
