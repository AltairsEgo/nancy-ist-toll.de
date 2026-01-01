import { useMemo, useRef, useState, useEffect } from "react";

import { Fireflies } from "@/components/Fireflies";
// import { OfferingsJar } from "@/components/OfferingsJar";
import "@/styles/theme.css";
import "@/styles/animations.css";

import { Hero } from "@/components/Hero";
import { GimmickGrid } from "@/components/GimmickGrid";
import { RuneStone } from "@/components/RuneStone";
import { RUNES, type Rune } from "./src/data/runes";

function pickRandomRune(prevId?: string): Rune {
  if (RUNES.length === 1) return RUNES[0];
  let next = RUNES[Math.floor(Math.random() * RUNES.length)];
  while (prevId && next.id === prevId) {
    next = RUNES[Math.floor(Math.random() * RUNES.length)];
  }
  return next;
}

export default function App() {
  const [firefliesOn, setFirefliesOn] = useState(false);
  const [entered, setEntered] = useState(false);
  const [rune, setRune] = useState<Rune>(() => pickRandomRune());
  const [mistLevel, setMistLevel] = useState<0 | 1 | 2>(1);

  function cycleMist() {
    setMistLevel((m) => {
      const next = m === 2 ? 0 : ((m + 1) as 0 | 1 | 2);
      console.log("mistLevel:", m, "->", next);
      return next;
    });
  }

  const gimmicks = useMemo(() => {
    return [
      {
        title: "Runen-Segen",
        desc: "Eine Botschaft für deinen Geist — klar, ruhig und wahr.",
        actionLabel: "Rune lesen",
        onClick: () => setRune((r) => pickRandomRune(r.id)),
      },
      {
        title: "Nebelzug",
        desc: "Verdichte den Schleier. Lass die Welt ein wenig leiser werden.",
        actionLabel: "Mehr Nebel",
        onClick: () => cycleMist(),
      },
      {
        title: "Irrlichter",
        desc: firefliesOn
          ? "Die Lichter folgen deiner Hand."
          : "Rufe leise Lichter, die dir folgen.",
        actionLabel: firefliesOn ? "Irrlichter bannen" : "Irrlichter rufen",
        onClick: () => setFirefliesOn((v) => !v),
      },
      {
        title: "Waldrauschen",
        desc: "Lass den Wald im Hintergrund ganz leise sprechen.",
        actionLabel: "Dem Wald lauschen",
        onClick: () => alert("Als Nächstes: Audio-Loop Toggle."),
      },
      {
        title: "Gaben (Erinnerungsglas)",
        desc: "Hinterlasse eine kleine Notiz für Morgaine von morgen.",
        actionLabel: "Gabe ablegen",
        onClick: () => alert("Als Nächstes: Notiz-Glas via localStorage."),
      },
    ];
  }, [firefliesOn]);

  return (
    <>
      <Fireflies enabled={firefliesOn} />
      {mistLevel > 0 && (
        <>
          <div
            className="mistLayer"
            style={{ opacity: mistLevel === 1 ? 0.55 : 0.85 }}
          />
          <div
            className="mistLayer mist2"
            style={{ opacity: mistLevel === 1 ? 0.35 : 0.65 }}
          />
        </>
      )}

      <main className="container">
        <Hero
          onEnter={() => {
            setEntered(true);
          }}
        />
        <RuneStone
          rune={rune}
          onNext={() => setRune((r) => pickRandomRune(r.id))}
        />

        <GimmickGrid items={gimmicks} />

        <footer className="small" style={{ marginTop: 26, opacity: 0.85 }}>
          Made for Morgaine — under moon and mist.
        </footer>
      </main>
    </>
  );
}
