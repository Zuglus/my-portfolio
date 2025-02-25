// src/components/ProjectModal.js
import { useState } from 'react';
import Image from 'next/image';

export default function ProjectModal({ project, onClose }) {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const currentSlide = project.slides[currentSlideIndex];

  const nextSlide = () => {
    if (currentSlideIndex < project.slides.length - 1) {
      setCurrentSlideIndex(currentSlideIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlideIndex > 0) {
      setCurrentSlideIndex(currentSlideIndex - 1);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80" onClick={onClose}>
      <div className="relative bg-primary p-8 rounded-3xl max-w-4xl w-full mx-4" onClick={(e) => e.stopPropagation()}>
        <button className="absolute top-4 right-4 text-white" onClick={onClose}>
          ✕
        </button>
        <h2 className="text-3xl font-mv-skifer mb-4">{project.title}</h2>
        <p className="mb-4">{project.description}</p>
        <div className="relative w-full h-[400px]">
          <Image
            src={currentSlide.image}
            alt={`Слайд ${currentSlideIndex + 1}`}
            fill
            className="object-contain"
          />
        </div>
        <div className="mt-4">
          <p><strong>Задача:</strong> {currentSlide.task}</p>
          <p><strong>Решение:</strong> {currentSlide.solution}</p>
        </div>
        <div className="flex justify-between mt-4">
          <button onClick={prevSlide} disabled={currentSlideIndex === 0}>
            Назад
          </button>
          <button onClick={nextSlide} disabled={currentSlideIndex === project.slides.length - 1}>
            Вперёд
          </button>
        </div>
      </div>
    </div>
  );
}