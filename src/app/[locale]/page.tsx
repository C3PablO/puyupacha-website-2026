import { setRequestLocale } from "next-intl/server";
import { hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { getHomeContent } from "@/lib/content";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ContentSection from "@/components/ContentSection";
import ContactForm from "@/components/ContactForm";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  setRequestLocale(locale);

  const content = getHomeContent(locale);

  return (
    <>
      <Navbar navLinks={content.navigation} />
      <main>
        <Hero
          id="hero"
          title={content.hero.title}
          description={content.hero.description}
          backgroundImage={content.hero.backgroundImage}
          buttons={content.hero.buttons}
        />
        <div id="sections">
          {content.sections.map((section, index) => (
            <ContentSection
              key={index}
              image={section.image}
              category={section.category}
              title={section.title}
              description={section.description}
              reversed={index % 2 !== 0}
            />
          ))}
        </div>
        <ContactForm id="contact" />
      </main>
    </>
  );
}
