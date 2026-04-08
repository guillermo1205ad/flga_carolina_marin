function HeroSection({ hero, profile, whatsappUrl }) {
  return (
    <section id="inicio" className="hero section-spacing">
      <div className="container hero-grid">
        <div className="hero-copy reveal">
          <p className="hero-badge">{hero.badge}</p>
          <h1>{hero.title}</h1>
          <p className="hero-description">{hero.description}</p>

          <div className="hero-cta-group">
            <a className="btn btn-primary" href={whatsappUrl}>
              {hero.ctaPrimary}
            </a>
            <a className="btn btn-secondary" href="#servicios">
              {hero.ctaSecondary}
            </a>
          </div>

          <ul className="hero-highlights" aria-label="Puntos clave del servicio">
            {hero.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <aside className="hero-panel reveal" aria-label="Resumen profesional">
          <p className="panel-label">{profile.profession}</p>
          <h2>{profile.fullName}</h2>
          <p className="panel-location">{profile.location}</p>

          <div className="panel-divider" />

          <div className="panel-metrics">
            <article>
              <p>Foco terapéutico</p>
              <strong>TEA · TEL · TDAH · TCC</strong>
            </article>
            <article>
              <p>Enfoque de trabajo</p>
              <strong>Salud + Educación</strong>
            </article>
            <article>
              <p>Perfil profesional</p>
              <strong>Metódico, creativo y humano</strong>
            </article>
          </div>
        </aside>
      </div>
    </section>
  );
}

export default HeroSection;
