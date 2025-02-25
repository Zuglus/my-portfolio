// src/components/PortfolioCard.js
import Image from 'next/image';
import Skeleton from './Skeleton';
import { useState } from 'react';

export default function PortfolioCard({ title, image, alt, isFirst, onClick }) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div 
      className="bg-white/5 rounded-[1.875rem] md:rounded-[1.25rem] overflow-hidden transition-all hover:-translate-y-2 hover:shadow-lg cursor-pointer group"
      onClick={onClick}
    >
      <div className="relative">
        {isLoading && <Skeleton />}
        <Image
          src={image}
          alt={alt}
          width={600}
          height={400}
          sizes="(max-width: 768px) 100vw, 50vw"
          className={`object-cover transition-transform duration-300 group-hover:scale-105 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
          priority={isFirst}
          onLoad={() => setIsLoading(false)}
          onError={() => setIsLoading(false)}
        />
      </div>
    </div>
  );
}