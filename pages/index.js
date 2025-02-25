// pages/index.js
import { useState } from 'react';
import Head from 'next/head';
import { portfolioData } from '../src/data/portfolioData';
import { projects } from '../src/data/projectsData';
import PortfolioCard from '../src/components/PortfolioCard';
import ProjectModal from '../src/components/ProjectModal';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import { useLockBodyScroll } from '../src/hooks/useLockBodyScroll';
import Image from 'next/image';

export default function Home() {
  const [selectedProject, setSelectedProject] = useState(null);
  useLockBodyScroll(!!selectedProject); // Блокируем скролл, когда модалка открыта

  const openModal = (projectId) => {
    const project = projects.find((p) => p.id === projectId);
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="min-h-screen bg-primary text-white font-onest">
      <Head>
        <title>Полина Мигранова | Графический дизайнер</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Портфолио графического дизайнера Полины Миграновой. Создание современного дизайна, брендинг, иллюстрации и веб-дизайн."
        />
        <meta
          name="keywords"
          content="графический дизайнер, дизайн, брендинг, логотипы, веб-дизайн, Полина Мигранова"
        />
        <meta name="author" content="Полина Мигранова" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <Header />
      <main className="relative mx-auto px-4 py-[7.75rem] max-w-[75rem]">
        <div className="relative mb-[4.1875rem] text-center">
          <div className="absolute top-[-2.875rem] md:top-[-1.875rem] left-[50%] w-[25.875rem] md:w-[17.25rem] h-[28.0125rem] md:h-[18.675rem] transform -translate-x-[20.6rem] md:-translate-x-[13.625rem]">
            <Image
              src="/images/rings_with_circle.svg"
              alt="Декоративные кольца"
              fill
              className="object-contain"
            />
          </div>
          <h2 className="font-mv-skifer text-[4.6875rem] md:text-[3.125rem] leading-[1.24] tracking-[0.01em] relative z-10">
            Портфолио
          </h2>
        </div>
        <div className="relative z-10 gap-[2.71875rem] md:gap-[1.8125rem] grid grid-cols-1 md:grid-cols-2 mx-auto max-w-[80rem]">
          {portfolioData.map((project, index) => (
            <PortfolioCard
              key={project.id}
              title={project.title}
              image={project.image}
              alt={project.alt}
              isFirst={index === 0}
              onClick={() => openModal(project.id)}
            />
          ))}
        </div>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={closeModal} />
        )}
      </main>
      <Footer />
    </div>
  );
}