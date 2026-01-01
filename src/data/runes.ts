export type Rune = {
  id: string;
  title: string;
  message: string;
};

export const RUNES: Rune[] = [
  {
    id: "wyrd",
    title: "Wyrd",
    message: "Der Wald beugt sich denen, die weitergehen.",
  },
  {
    id: "skadi",
    title: "Skadi",
    message: "Deine Ruhe ist schärfer als jede Klinge.",
  },
  { id: "eld", title: "Eld", message: "Ein kleiner Funke ist trotzdem Macht." },
  {
    id: "veil",
    title: "Schleier",
    message: "Was du fürchtest, ist oft nur Nebel.",
  },
  { id: "oak", title: "Eiche", message: "Steh fest. Atme. Wurzle. Dann geh." },
  {
    id: "moon",
    title: "Mond",
    message: "Auch im Dunkeln kannst du die Richtung wählen.",
  },
  {
    id: "runeheart",
    title: "Runenherz",
    message: "Du wurdest gemacht, um zu bestehen — und zu leuchten.",
  },
];
