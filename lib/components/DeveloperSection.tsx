const DeveloperSection = () => {
  return (
    <section id="developer" className="py-24">
      <div className="mx-auto max-w-[1180px] px-6">
        <div className="reveal mx-auto mb-10 max-w-[760px] text-center">
          <span className="mb-3 inline-block text-[13px] font-semibold uppercase tracking-[0.08em] text-primary-deep">
            Creado por
          </span>
          <h2 className="text-[clamp(32px,4vw,48px)] font-extrabold leading-[1.05] tracking-[-0.025em]">
            Un proyecto independiente.
          </h2>
        </div>

        <div className="mx-auto grid max-w-[940px] grid-cols-1 items-center gap-7 md:grid-cols-[280px_1fr] md:gap-14">
          <div className="reveal flex justify-center">
            <div
              className="relative grid h-[220px] w-[220px] place-items-center rounded-full text-[76px] font-extrabold tracking-[-0.02em] text-[#1c3a26] shadow-[0_6px_24px_-8px_rgba(15,23,32,0.10),0_2px_6px_rgba(15,23,32,0.04)]"
              style={{
                background: `
                  radial-gradient(circle at 30% 30%, rgba(255,255,255,0.6), transparent 60%),
                  linear-gradient(135deg, #8BCF9B 0%, #5FB376 100%)
                `,
              }}
            >
              DG
              <div className="absolute -inset-2 rounded-full border border-dashed border-primary/50" />
            </div>
          </div>

          <div className="reveal text-center md:text-left">
            <h2 className="mb-3 text-[clamp(28px,3vw,38px)] font-extrabold tracking-[-0.02em]">
              David <span className="text-primary-deep">Gomez</span>
            </h2>
            <p className="mb-5 text-[17px] leading-relaxed text-text-2 [text-wrap:pretty]">
              Desarrollador de software enfocado en experiencias moviles limpias y funcionales. Ploutos nacio de una necesidad personal: una app de finanzas que simplemente funcione, sin friccion ni complejidad innecesaria.
            </p>
            <div className="inline-flex flex-wrap justify-center gap-2.5 md:justify-start">
              <a
                href="https://davegzarca.dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-text px-5 py-3 text-[14.5px] font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-[#0E1620]"
              >
                Visitar portfolio
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17L17 7M9 7h8v8" />
                </svg>
              </a>
              <a
                href="https://github.com/davegomez"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-hairline bg-white px-[18px] py-3 text-[14.5px] font-semibold transition-all hover:-translate-y-0.5 hover:border-text-2"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56 0-.27-.01-1.01-.02-1.98-3.2.7-3.87-1.54-3.87-1.54-.52-1.33-1.27-1.69-1.27-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.69 1.25 3.34.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.18-3.08-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.78 0c2.21-1.49 3.18-1.18 3.18-1.18.63 1.59.23 2.76.11 3.05.74.8 1.18 1.82 1.18 3.08 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.06.78 2.14 0 1.55-.01 2.79-.01 3.17 0 .31.21.67.8.56C20.21 21.39 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5z" />
                </svg>
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeveloperSection;
