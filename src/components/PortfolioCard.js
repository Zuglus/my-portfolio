// src/components/PortfolioCard.js
import Image from 'next/image';

export default function PortfolioCard({ title, image, alt, isFirst }) {
  return (
    <div className="rounded-[1.875rem] md:rounded-[1.25rem] overflow-hidden transition-all hover:-translate-y-2 hover:shadow-lg cursor-pointer group">
      <div className="relative w-full">
        <Image
          src={image}
          alt={alt}
          width={600}  // Подставь свои размеры
          height={800} // Подставь свои размеры
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          priority={isFirst} // Только для первого изображения
        />
      </div>
    </div>
  );
}