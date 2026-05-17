export default function NameSection() {
  return (
    <section
      id="about"
      className="py-24"
      style={{
        background: `
          radial-gradient(60% 60% at 80% 20%, rgba(247, 220, 111, 0.18), transparent 70%),
          radial-gradient(50% 60% at 15% 80%, rgba(139, 207, 155, 0.18), transparent 70%),
          #F7F9FC
        `,
      }}
    >
      <div className="mx-auto max-w-[1180px] px-6">
        <div className="reveal mx-auto max-w-[820px] px-9 py-14 text-center">
          <span className="mb-4 inline-block text-xs font-bold uppercase tracking-[0.16em] text-primary-deep">
            Por que Ploutos?
          </span>
          <div
            className="mb-6 text-[clamp(56px,9vw,110px)] font-bold leading-none tracking-[-0.02em]"
            style={{ fontFeatureSettings: '"ss01"' }}
          >
            Πλοῦτος
          </div>
          <p className="text-[clamp(19px,2vw,22px)] leading-relaxed text-text-2 [text-wrap:pretty]">
            En la mitologia griega, Ploutos era la personificacion de la riqueza obtenida a traves del trabajo honesto. Un guardian silencioso de tus finanzas.
          </p>
        </div>
      </div>
    </section>
  );
}
