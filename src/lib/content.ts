import fs from "fs";
import path from "path";

export interface NavLink {
  text: string;
  href: string;
}

export interface HeroButton {
  text: string;
  href: string;
}

export interface HeroContent {
  title: string;
  description: string;
  backgroundImage: string;
  buttons: HeroButton[];
}

export interface SectionContent {
  image: string;
  category: string;
  title: string;
  description: string;
}

export interface HomeContent {
  navigation: NavLink[];
  hero: HeroContent;
  sections: SectionContent[];
}

export function getHomeContent(locale: string): HomeContent {
  const filePath = path.join(process.cwd(), "content/pages/home.json");
  const raw = JSON.parse(fs.readFileSync(filePath, "utf8"));

  return {
    navigation: raw.navigation?.[locale] ?? raw.navigation?.["es"] ?? [],
    hero: raw.hero?.[locale] ?? raw.hero?.["es"] ?? {},
    sections: raw.sections?.[locale] ?? raw.sections?.["es"] ?? [],
  } as HomeContent;
}
