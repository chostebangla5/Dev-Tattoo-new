import realism from "@/assets/portfolio-realism.jpg";
import anime from "@/assets/portfolio-anime.jpg";
import portrait from "@/assets/portfolio-portrait.jpg";
import japanese from "@/assets/portfolio-japanese.jpg";
import minimal from "@/assets/portfolio-minimal.jpg";
import mandala from "@/assets/portfolio-mandala.jpg";
import religious from "@/assets/portfolio-religious.jpg";
import blackwork from "@/assets/portfolio-blackwork.jpg";
import color from "@/assets/portfolio-color.jpg";

export interface PortfolioItem {
  src: string;
  alt: string;
  title: string;
  category: string;
  width: number;
  height: number;
}

export const CATEGORIES = [
  "All",
  "Realism",
  "Anime",
  "Portrait",
  "Japanese",
  "Minimal",
  "Religious",
  "Blackwork",
  "Color",
] as const;

export const PORTFOLIO: PortfolioItem[] = [
  {
    src: realism,
    alt: "Hyper-realistic black and grey lion tattoo on forearm by Debasis Adak, Dev Tattoo & Art Kolkata",
    title: "Lion — Black & Grey Realism",
    category: "Realism",
    width: 768,
    height: 1024,
  },
  {
    src: japanese,
    alt: "Japanese dragon full sleeve tattoo with waves and cherry blossoms, Dev Tattoo & Art Kolkata",
    title: "Dragon — Japanese Full Sleeve",
    category: "Japanese",
    width: 768,
    height: 1152,
  },
  {
    src: portrait,
    alt: "Photorealistic portrait tattoo of a woman in black and grey, Dev Tattoo & Art Kolkata",
    title: "Her — Portrait Realism",
    category: "Portrait",
    width: 768,
    height: 1088,
  },
  {
    src: anime,
    alt: "Colorful anime warrior character tattoo on upper arm, anime tattoo Kolkata",
    title: "Ronin — Anime Color",
    category: "Anime",
    width: 768,
    height: 960,
  },
  {
    src: religious,
    alt: "Lord Shiva religious black and grey realism tattoo on shoulder, Dev Tattoo & Art Kolkata",
    title: "Mahadev — Religious Realism",
    category: "Religious",
    width: 768,
    height: 1120,
  },
  {
    src: minimal,
    alt: "Minimal fine line lotus tattoo on wrist, fine line tattoo Kolkata",
    title: "Lotus — Fine Line Minimal",
    category: "Minimal",
    width: 768,
    height: 880,
  },
  {
    src: color,
    alt: "Vivid full color phoenix tattoo on upper arm, color tattoo Kolkata",
    title: "Phoenix — Full Color",
    category: "Color",
    width: 768,
    height: 1056,
  },
  {
    src: mandala,
    alt: "Intricate mandala dotwork tattoo on forearm, mandala tattoo Kolkata",
    title: "Sacred Geometry — Mandala",
    category: "Blackwork",
    width: 768,
    height: 1024,
  },
  {
    src: blackwork,
    alt: "Bold geometric blackwork tattoo covering forearm, blackwork tattoo Kolkata",
    title: "Geometry — Blackwork",
    category: "Blackwork",
    width: 768,
    height: 944,
  },
];
