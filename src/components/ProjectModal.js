import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export default function ProjectModal({ project, onClose }) {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [direction, setDirection] = useState(0); // Для анимации: 1 — вперёд, -1 — назад
  const currentSlide = project.slides[currentSlideIndex];

  const nextSlide = () => {
    if (currentSlideIndex < project.slides.length - 1) {
      setDirection(1);
      setCurrentSlideIndex(currentSlideIndex + 1);
    } else {
      setDirection(1);
      setCurrentSlideIndex(0);
    }
  };

  const prevSlide = () => {
    if (currentSlideIndex > 0) {
      setDirection(-1);
      setCurrentSlideIndex(currentSlideIndex - 1);
    } else {
      setDirection(-1);
      setCurrentSlideIndex(project.slides.length - 1);
    }
  };

  const goToSlide = (index) => {
    setDirection(index > currentSlideIndex ? 1 : -1);
    setCurrentSlideIndex(index);
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction > 0 ? -1000 : 1000,
      opacity: 0,
    }),
  };

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="relative bg-primary text-white rounded-[1.875rem] max-w-5xl w-full max-h-[90vh] overflow-y-auto scrollbar-thin"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 z-10 text-3xl text-white hover:text-secondary"
              onClick={onClose}
            >
              ✕
            </button>
            <div className="p-8">
              <h2 className="font-mv-skifer text-[3.125rem] md:text-[4.6875rem] leading-tight mb-4">{project.title}</h2>
              <p className="text-lg md:text-xl mb-6">{project.description}</p>
              <div className="relative w-full h-[500px] mb-6 rounded-lg overflow-hidden">
                <AnimatePresence initial={false} custom={direction}>
                  <motion.div
                    key={currentSlideIndex}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={currentSlide.image}
                      alt={`Слайд ${currentSlideIndex + 1}`}
                      fill
                      className="object-contain"
                      quality={85}
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
              <div className="flex items-center justify-center gap-4 mb-6">
                <button
                  className="text-4xl text-white hover:text-secondary"
                  onClick={prevSlide}
                >
                  ←
                </button>
                <div className="flex gap-2">
                  {project.slides.map((_, index) => (
                    <button
                      key={index}
                      className={`w-3 h-3 rounded-full transition-all ${
                        index === currentSlideIndex ? 'bg-secondary scale-125' : 'bg-white/30'
                      }`}
                      onClick={() => goToSlide(index)}
                    />
                  ))}
                </div>
                <button
                  className="text-4xl text-white hover:text-secondary"
                  onClick={nextSlide}
                >
                  →
                </button>
              </div>
              <div>
                <p className="text-base md:text-lg opacity-80"><strong>Задача:</strong> {currentSlide.task}</p>
                <p className="text-base md:text-lg opacity-80"><strong>Решение:</strong> {currentSlide.solution}</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}