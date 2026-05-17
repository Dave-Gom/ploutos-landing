const features = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3" />
        <path d="M3 7v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-4h-5a2 2 0 0 1 0-4h5" />
        <circle cx="17" cy="14" r="0.8" fill="currentColor" />
      </svg>
    ),
    bg: "bg-cat-green",
    color: "text-[#3a7a4d]",
    title: "Multiples cuentas",
    desc: "Crea cuentas con iconos, colores y monedas diferentes. Visualiza el balance de cada una al instante.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 21h18" />
        <rect x="5" y="10" width="3" height="9" />
        <rect x="10.5" y="6" width="3" height="13" />
        <rect x="16" y="13" width="3" height="6" />
      </svg>
    ),
    bg: "bg-cat-blue",
    color: "text-[#3f6c95]",
    title: "Ingresos, gastos y transferencias",
    desc: "Registra cualquier movimiento financiero con categorias, notas y fechas. Todo organizado automaticamente.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 12A9 9 0 1 1 12 3v9z" />
        <path d="M21 12A9 9 0 0 0 12 3" />
      </svg>
    ),
    bg: "bg-cat-purple",
    color: "text-[#6c4fa3]",
    title: "Estadisticas detalladas",
    desc: "4 tipos de graficas interactivas: gastos e ingresos por categoria y por cuenta. Filtra por fecha, cuenta o categoria.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="8" cy="8" r="5" />
        <circle cx="16" cy="16" r="5" />
        <path d="M11.5 11.5L14 14" />
      </svg>
    ),
    bg: "bg-accent-soft",
    color: "text-[#a0822b]",
    title: "Multi-moneda",
    desc: "Soporta 20+ monedas incluyendo USD, EUR, MXN, ARS, PYG, BRL y mas. Tasas de cambio actualizadas diariamente.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L4 6v6c0 5 3.5 9 8 10 4.5-1 8-5 8-10V6l-8-4z" />
      </svg>
    ),
    bg: "bg-cat-pink",
    color: "text-[#a85770]",
    title: "Privacidad total",
    desc: "Sin cuentas de usuario, sin servidores. Todos tus datos financieros se almacenan exclusivamente en tu dispositivo, cifrados con AES-256.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20" />
      </svg>
    ),
    bg: "bg-cat-yellow",
    color: "text-[#8a7220]",
    title: "5 idiomas",
    desc: "Disponible en English, Espanol, Deutsch, Avane'e (Guarani) y Latina (Latin clasico).",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="bg-bg-2 py-24">
      <div className="mx-auto max-w-[1180px] px-6">
        <div className="reveal mx-auto mb-14 max-w-[760px] text-center">
          <span className="mb-3 inline-block text-[13px] font-semibold uppercase tracking-[0.08em] text-primary-deep">
            Funciones
          </span>
          <h2 className="mb-3.5 text-[clamp(32px,4vw,48px)] font-extrabold leading-[1.05] tracking-[-0.025em] [text-wrap:balance]">
            Que puedes hacer con Ploutos?
          </h2>
          <p className="text-lg text-text-2 [text-wrap:pretty]">
            Todo lo que necesitas para registrar, organizar y entender tu dinero. Nada que no necesites.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="reveal rounded-[22px] border border-hairline bg-white p-7 transition-all duration-250 hover:-translate-y-1 hover:border-transparent hover:shadow-[0_6px_24px_-8px_rgba(15,23,32,0.10),0_2px_6px_rgba(15,23,32,0.04)]"
            >
              <div className={`mb-5 grid h-12 w-12 place-items-center rounded-xl ${f.bg} ${f.color}`}>
                {f.icon}
              </div>
              <h3 className="mb-2 text-[19px] font-bold tracking-[-0.01em]">{f.title}</h3>
              <p className="text-[14.5px] leading-relaxed text-text-2 [text-wrap:pretty]">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
