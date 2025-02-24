export default function Home() {
    return (
      <div className="min-h-screen bg-primary text-white font-onest">
        <header className="py-16 text-center">
          <h1 className="font-mv-skifer text-[4.6875rem] md:text-[3.125rem] leading-tight tracking-tight">
            Полина Мигранова
          </h1>
          <p className="text-xl mt-4">Графический дизайнер</p>
        </header>
        <main className="max-w-[75rem] mx-auto px-4 py-16">
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Здесь будут карточки, пока оставим пустым */}
            <div className="h-64 bg-white/5 rounded-3xl"></div>
            <div className="h-64 bg-white/5 rounded-3xl"></div>
            <div className="h-64 bg-white/5 rounded-3xl"></div>
            <div className="h-64 bg-white/5 rounded-3xl"></div>
          </section>
        </main>
      </div>
    );
  }