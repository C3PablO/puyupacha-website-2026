interface HeroButton {
  text: string;
  href: string;
}

interface HeroProps {
  id: string;
  title: string;
  description: string;
  backgroundImage: string;
  buttons: HeroButton[];
}

export default function Hero({
  id,
  title,
  description,
  backgroundImage,
  buttons,
}: HeroProps) {
  return (
    <section
      id={id}
      className="relative min-h-screen flex items-center justify-center text-white"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-black/50" aria-hidden="true" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          {title}
        </h1>
        <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto text-white/90">
          {description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {buttons[0] && (
            <a
              href={buttons[0].href}
              className="px-8 py-3 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              {buttons[0].text}
            </a>
          )}
          {buttons[1] && (
            <a
              href={buttons[1].href}
              className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
            >
              {buttons[1].text}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
