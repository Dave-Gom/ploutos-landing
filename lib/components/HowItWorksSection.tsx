const steps = [
  {
    num: "01",
    title: "Crea tus cuentas",
    desc: "Agrega tus cuentas bancarias, billeteras o efectivo con la moneda que uses.",
    hasArrow: true,
  },
  {
    num: "02",
    title: "Registra tus movimientos",
    desc: "Ingresos, gastos o transferencias. Con categorias y notas opcionales.",
    hasArrow: true,
  },
  {
    num: "03",
    title: "Visualiza tu panorama",
    desc: "Graficas, resumenes mensuales y comparaciones. Entiende a donde va tu dinero.",
    hasArrow: false,
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how" className="py-24">
      <div className="mx-auto max-w-[1180px] px-6">
        <div className="reveal mx-auto mb-14 max-w-[760px] text-center">
          <span className="mb-3 inline-block text-[13px] font-semibold uppercase tracking-[0.08em] text-primary-deep">
            Asi de simple
          </span>
          <h2 className="mb-3.5 text-[clamp(32px,4vw,48px)] font-extrabold leading-[1.05] tracking-[-0.025em] [text-wrap:balance]">
            Tres pasos. Cero friccion.
          </h2>
          <p className="text-lg text-text-2 [text-wrap:pretty]">
            Desde que abris la app hasta que entendes a donde va tu dinero.
          </p>
        </div>

        <div className="relative grid grid-cols-1 gap-7 md:grid-cols-3">
          {steps.map((s) => (
            <div
              key={s.num}
              className="reveal relative rounded-[22px] border border-hairline bg-white px-7 py-9"
            >
              <div className="mb-5 text-[64px] font-extrabold leading-none tracking-[-0.04em] text-primary">
                {s.num}
              </div>
              <h3 className="mb-2.5 text-[22px] font-bold tracking-[-0.015em]">{s.title}</h3>
              <p className="text-[15px] leading-relaxed text-text-2">{s.desc}</p>

              {s.hasArrow && (
                <div className="absolute -right-[22px] top-1/2 z-10 hidden -translate-y-1/2 md:grid h-9 w-9 place-items-center rounded-full border border-hairline bg-white text-neutral">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
