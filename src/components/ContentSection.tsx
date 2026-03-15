interface ContentSectionProps {
  image: string;
  category: string;
  title: string;
  description: string;
  reversed?: boolean;
}

export default function ContentSection({
  image,
  category,
  title,
  description,
  reversed = false,
}: ContentSectionProps) {
  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`flex flex-col lg:flex-row items-center gap-12 ${
            reversed ? "lg:flex-row-reverse" : ""
          }`}
        >
          <div className="w-full lg:w-1/2">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-200">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={image}
                alt={title}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-600 mb-3">
              {category}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {title}
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
