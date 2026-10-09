export const site = {
  name: "Ombra",
  legalName: "Ombra Interior Studio",
  tagline: "Interiors in quiet light",
  description:
    "Ombra is an independent interior design studio in Mumbai creating calm, tactile homes with natural materials, honest craft and carefully composed light.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://ombra-studio.example",
  email: "hello@ombra-studio.com",
  location: "Bandra West, Mumbai",
  hours: "Mon–Fri, 9:00–18:00 IST",
  founded: "2014",
};

export type ImageAsset = {
  src: string;
  alt: string;
  /** CSS object-position focal point */
  focus?: string;
};

export const images = {
  heroSuite: {
    src: "/images/hero-suite.jpg",
    alt: "Dark bedroom suite with a low linen bed against a fluted oak wall lit by a warm strip of light",
    focus: "62% 50%",
  },
  studioLibrary: {
    src: "/images/studio-library.jpg",
    alt: "Walnut library wall with glowing shelves and two cream bouclé armchairs around a travertine table",
    focus: "50% 50%",
  },
  studioShelving: {
    src: "/images/studio-shelving.jpg",
    alt: "Black oak shelving holding stoneware vases, linen-bound books and a small brass bowl",
    focus: "50% 50%",
  },
  loungeLamp: {
    src: "/images/lounge-lamp.jpg",
    alt: "Charcoal bouclé sofa beside a smoked oak side table with stacked books and a glowing amber glass lamp",
    focus: "70% 55%",
  },
  projectLoft: {
    src: "/images/project-loft.jpg",
    alt: "Harbour loft with a low graphite sofa, a stone side table and a softly glowing glass lamp",
    focus: "50% 55%",
  },
  projectKitchen: {
    src: "/images/project-kitchen.jpg",
    alt: "Bright kitchen with pale oak cabinetry, a travertine island with oak stools and a window onto the garden",
    focus: "50% 55%",
  },
  diningPanorama: {
    src: "/images/dining-panorama.jpg",
    alt: "Dark dining room with a long smoked oak table, upholstered chairs and a window onto an evening garden",
    focus: "50% 55%",
  },
  servicesPlanning: {
    src: "/images/services-planning.jpg",
    alt: "Pale oak kitchen with a travertine island and counter stools, framed to show the layout",
    focus: "50% 50%",
  },
  servicesRenovation: {
    src: "/images/services-renovation.jpg",
    alt: "Renovated loft corner with a raw concrete column and a large black steel-framed window",
    focus: "40% 50%",
  },
  servicesResidential: {
    src: "/images/services-residential.jpg",
    alt: "Linen bed with a fluted oak wall and a warm glowing bedside lamp",
    focus: "50% 50%",
  },
  servicesConsultancy: {
    src: "/images/services-consultancy.jpg",
    alt: "Long smoked oak table surrounded by upholstered chairs, ready for a design review",
    focus: "50% 55%",
  },
  servicesJoinery: {
    src: "/images/services-joinery.jpg",
    alt: "Close view of black oak shelving with stoneware vases, showing the joinery detail",
    focus: "50% 50%",
  },
  journalTextures: {
    src: "/images/journal-textures.jpg",
    alt: "Oatmeal bouclé sofa with an open book resting on the seat cushion",
    focus: "50% 50%",
  },
  journalDinner: {
    src: "/images/journal-dinner.jpg",
    alt: "Two friends laughing across a dark oak dining table under a low pendant lamp",
    focus: "50% 40%",
  },
  journalConversation: {
    src: "/images/journal-conversation.jpg",
    alt: "Two women talking on a cream sofa in a softly lit living room",
    focus: "50% 45%",
  },
} satisfies Record<string, ImageAsset>;

export const heroVideo = {
  sources: [
    { src: "/videos/interior-film.mp4", type: "video/mp4" },
    { src: "/videos/interior-film.webm", type: "video/webm" },
  ],
  poster: "/videos/interior-film-poster.jpg",
};

export const navLinks = [
  { label: "Studio", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Projects", href: "/#projects" },
  { label: "Journal", href: "/#journal" },
];

export const heroStats = [
  { value: "180", suffix: "+", label: "Homes Delivered" },
  { value: "12", suffix: "yrs", label: "Of Quiet Practice" },
];

export type Project = {
  title: string;
  location: string;
  image: ImageAsset;
};

export const projects: Project[] = [
  { title: "Coastal Penthouse", location: "Bandra West, Mumbai", image: images.heroSuite },
  { title: "Heritage Loft", location: "Colaba, Mumbai", image: images.projectLoft },
  { title: "Verandah Villa", location: "Alibaug, Maharashtra", image: images.projectKitchen },
];

export const featuredProject = projects[1];

export const services = [
  {
    id: "planning",
    title: "Spatial Planning",
    lead: "We map how a home really moves — circulation, storage and daylight — long before a single finish is specified.",
    image: images.servicesPlanning,
  },
  {
    id: "renovation",
    title: "Full Renovation",
    lead: "Tired structure brought back to life: opened plans, restored joinery and services rebuilt quietly behind the walls.",
    image: images.servicesRenovation,
  },
  {
    id: "residential",
    title: "Residential Interiors",
    lead: "Whole-home interiors composed around your daily rituals, from the first sketch to the last cushion in place.",
    image: images.servicesResidential,
  },
  {
    id: "consultancy",
    title: "Design Consultancy",
    lead: "An experienced second opinion on layouts, budgets and suppliers, so every decision is made with confidence.",
    image: images.servicesConsultancy,
  },
  {
    id: "joinery",
    title: "Joinery & Detailing",
    lead: "Bespoke cabinetry and lighting drawn to the millimetre, ready for your builder and our trusted makers.",
    image: images.servicesJoinery,
  },
];

export const impactStats = [
  { value: "180", suffix: "+", text: "Homes delivered across India and abroad." },
  { value: "96", suffix: "%", text: "Of clients return or refer us to a friend." },
  { value: "40", suffix: "+", text: "Master craftsmen in our trusted workshop network." },
  { value: "₹45", suffix: "Cr+", text: "Commissioned from local artisans and studios." },
];

export const marqueeImages: ImageAsset[] = [images.studioLibrary, images.studioShelving, images.loungeLamp];

export type Article = {
  slug: string;
  title: string;
  shortTitle: string;
  date: string;
  isoDate: string;
  readTime: string;
  excerpt: string;
  image: ImageAsset;
  body: { heading?: string; text: string }[];
};

export const articles: Article[] = [
  {
    slug: "slow-textures-fabrics-that-age-well",
    title: "Slow Textures: Choosing Fabrics That Age Well",
    shortTitle: "Slow Textures",
    date: "Feb 18, 2025",
    isoDate: "2025-02-18",
    readTime: "5 min read",
    excerpt:
      "Bouclé, linen and wool each wear in their own way. Here is how we choose upholstery that looks better in year ten than on delivery day.",
    image: images.journalTextures,
    body: [
      {
        text: "The fabrics in a room do more quiet work than almost anything else. They soften sound, catch light and invite you to sit a little longer. They also take the most wear, which is why we choose them as carefully as we choose a stone or a timber.",
      },
      {
        heading: "Start with the fibre",
        text: "Natural fibres age with character. Linen relaxes and softens with every wash, wool recovers from crushing and resists stains surprisingly well, and a dense bouclé hides the small marks of family life. Synthetic blends have their place on high-traffic dining chairs, but we always start the conversation with what will grow more beautiful over time.",
      },
      {
        heading: "Weight matters more than pattern",
        text: "For seating we look for heavier cloths with a tight weave. A beautiful but loose fabric will pill and stretch on a sofa within months. When a client falls for a delicate weave, we use it on cushions or a headboard instead, where it is admired rather than sat on.",
      },
      {
        heading: "Colour that forgives",
        text: "Mid-tones — oatmeal, taupe, warm grey and olive — are far more forgiving than pure white or black. They hold their depth as they fade and make the gentle patina of use look intentional rather than tired.",
      },
      {
        text: "Our rule of thumb: touch everything, live with a sample for a week, and choose the fabric you will still want to run your hand across in a decade.",
      },
    ],
  },
  {
    slug: "lighting-a-dining-room-for-late-evenings",
    title: "Lighting a Dining Room for Evenings That Run Late",
    shortTitle: "Late Evenings",
    date: "Jan 27, 2025",
    isoDate: "2025-01-27",
    readTime: "4 min read",
    excerpt:
      "The best dinners end long after the plates are cleared. We share the layered lighting approach that keeps a dining room warm and flattering.",
    image: images.journalDinner,
    body: [
      {
        text: "A dining room is judged after dark. The table can be perfect and the chairs beautifully made, but if the light is flat or glaring, nobody lingers. We design dining lighting in layers so the room can shift from a bright family lunch to a slow candlelit evening.",
      },
      {
        heading: "One low pendant, centred on the table",
        text: "A pendant hung roughly 70 to 80 centimetres above the tabletop pulls everyone into a shared pool of light. We favour shades that direct light downward and hide the bulb entirely, so nobody squints across the table.",
      },
      {
        heading: "Warm the walls, not just the table",
        text: "Wall washers, a lit niche or a lamp on the sideboard stop the edges of the room from falling into darkness. Light on vertical surfaces makes a space feel larger and calmer, and keeps faces softly lit from the side.",
      },
      {
        heading: "Everything on a dimmer",
        text: "We specify 2700K lamps with smooth dimming on every circuit. Dimmed together, the layers create that late-evening glow where conversation slows and nobody wants to be the first to leave.",
      },
    ],
  },
  {
    slug: "arranging-seating-so-people-actually-talk",
    title: "Arranging Seating So People Actually Talk",
    shortTitle: "Seating to Talk",
    date: "Jan 09, 2025",
    isoDate: "2025-01-09",
    readTime: "6 min read",
    excerpt:
      "Living rooms are too often arranged around a screen. A few simple distances and angles turn them back into rooms for conversation.",
    image: images.journalConversation,
    body: [
      {
        text: "Most living rooms we are invited into have every seat facing the same wall. It is understandable, but it quietly discourages the thing a living room does best: bringing people together. Rearranging around conversation rarely needs new furniture, only new distances.",
      },
      {
        heading: "Keep the circle close",
        text: "People talk comfortably when they sit within about two and a half metres of each other. Beyond that, voices rise and the group splits into pairs. We often pull sofas off the walls entirely to tighten the circle around a low table.",
      },
      {
        heading: "Angles over straight lines",
        text: "Two armchairs angled slightly toward a sofa feel more welcoming than chairs set square. A gentle angle lets people face each other without the formality of sitting directly opposite.",
      },
      {
        heading: "A surface within reach of every seat",
        text: "Every seat should have somewhere to set down a cup. Side tables, a generous ottoman or a deep window ledge all count. It sounds small, but it is the difference between perching and settling in.",
      },
      {
        text: "The screen can stay — we simply stop letting it decide where everyone sits.",
      },
    ],
  },
];

export function getArticle(slug: string) {
  return articles.find((article) => article.slug === slug);
}

export const projectTypes = [
  "Whole-home interior",
  "Renovation",
  "Single room",
  "Design consultancy",
  "Joinery & detailing",
  "Something else",
] as const;
