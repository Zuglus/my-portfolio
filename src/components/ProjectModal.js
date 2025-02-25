// src/components/ProjectModal.js
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import Skeleton from './Skeleton';

export default function ProjectModal({ project, onClose }) {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const currentSlide = project.slides[currentSlideIndex];

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [currentSlideIndex]);

  const nextSlide = () => {
    setDirection(1);
    setCurrentSlideIndex(currentSlideIndex < project.slides.length - 1 ? currentSlideIndex + 1 : 0);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlideIndex(currentSlideIndex > 0 ? currentSlideIndex - 1 : project.slides.length - 1);
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
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 cursor-default"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="relative bg-primary text-white rounded-[1.875rem] max-w-7xl w-full max-h-[90vh] overflow-y-auto scrollbar-thin"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-6 right-6 p-4 rounded-full bg-black/40 hover:bg-black/60 text-white transition-all duration-300"
              onClick={onClose}
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="p-8">
              <h2 className="font-mv-skifer text-[4.6875rem] md:text-[3.125rem] leading-tight mb-4">{project.title}</h2>
              <p className="text-[3.28125rem] md:text-xl font-light mb-6">{project.description}</p>
              <div className="relative w-full h-[700px] md:h-[500px] mb-4 md:mb-6 rounded-lg overflow-hidden">
                {isLoading && <Skeleton />}
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
                      onLoad={() => setIsLoading(false)}
                      onError={() => setIsLoading(false)}
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
              <div className="flex items-center justify-center gap-4 mb-6">
                <button
                  className="w-[5rem] h-[5rem] md:w-[3rem] md:h-[3rem] rounded-full border border-white/20 text-7xl md:text-5xl text-white hover:bg-white hover:text-[#3624A6] transition-all duration-300"
                  onClick={prevSlide}
                >
                  ←
                </button>
                <div className="flex gap-2">
                  {project.slides.map((_, index) => (
                    <button
                      key={index}
                      className={`w-3 h-3 rounded-full transition-all ${index === currentSlideIndex ? 'bg-secondary scale-125' : 'bg-white/30'}`}
                      onClick={() => goToSlide(index)}
                    />
                  ))}
                </div>
                <button
                  className="w-[5rem] h-[5rem] md:w-[3rem] md:h-[3rem] rounded-full border border-white/20 text-7xl md:text-5xl text-white hover:bg-white hover:text-[#3624A6] transition-all duration-300"
                  onClick={nextSlide}
                >
                  →
                </button>
              </div>
              <div>
                <p className="text-[3.28125rem] md:text-lg">
                  <span className="text-white font-semibold">Задача: </span> <span className='opacity-70'>{currentSlide.task}</span>
                </p>
                <p className="text-[3.28125rem] md:text-lg">
                  <span className="font-semibold">Решение: </span>
                  <span className='opacity-70'>{currentSlide.solution}</span>
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}