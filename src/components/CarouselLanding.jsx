import { useEffect, useState } from 'react';
import {
  benefits,
  credentials,
  hero,
  placeholders,
  profile,
  services,
  whatsappUrl
} from '../content';

const slideMeta = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'servicios', label: 'Servicios' },
  { id: 'confianza', label: 'Confianza' },
  { id: 'contacto', label: 'Contacto' }
];

function CarouselLanding() {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((value) => (value - 1 + slideMeta.length) % slideMeta.length);
  const next = () => setIndex((value) => (value + 1) % slideMeta.length);

  useEffect(() => {
    const onKey = (event) => {
      if (event.key === 'ArrowLeft') prev();
      if (event.key === 'ArrowRight') next();
    };

    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <div className="carousel-page">
      <header className="topbar">
        <div className="brand">
          <span className="brand-mark">CM</span>
          <div className="brand-stack">
            <strong>{profile.professionalName}</strong>
            <span>{profile.profession}</span>
          </div>
        </div>

        <nav className="dots" aria-label="Navegación por carrusel">
          {slideMeta.map((slide, itemIndex) => (
            <button
              key={slide.id}
              className={`dot ${itemIndex === index ? 'is-active' : ''}`}
              type="button"
              onClick={() => setIndex(itemIndex)}
              aria-label={`Ir a ${slide.label}`}
            >
              {slide.label}
            </button>
          ))}
        </nav>

        <a className="btn btn-primary btn-top" href={whatsappUrl}>
          WhatsApp
        </a>
      </header>

      <main className="carousel-stage" aria-live="polite">
        <div className="track" style={{ transform: `translateX(-${index * 100}%)` }}>
          <section className="slide" id="inicio">
            <div className="slide-content slide-grid hero-layout">
              <div>
                <p className="mini-label">{profile.profession}</p>
                <h1>{profile.professionalName}</h1>
                <p className="lead">{hero.title}</p>
                <p className="muted">{hero.description}</p>

                <ul className="hero-points">
                  {hero.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                <div className="actions">
                  <a className="btn btn-primary" href={whatsappUrl}>
                    Escribir por WhatsApp
                  </a>
                  <button className="btn btn-secondary" type="button" onClick={() => setIndex(1)}>
                    Ver servicios
                  </button>
                </div>
              </div>

              <div className="visual-stack">
                <article className="accent-panel">
                  <p className="mini-label">Propuesta de valor</p>
                  <h3>Atención cercana con base profesional</h3>
                  <p className="small-muted">
                    Un acompañamiento claro, humano y organizado para orientar a familias en decisiones
                    terapéuticas con seguridad.
                  </p>
                </article>
                <article className="compact-card">
                  <p className="mini-label">Enfoque</p>
                  <ul className="compact-list">
                    <li>TEA</li>
                    <li>TEL</li>
                    <li>TDAH</li>
                    <li>TCC</li>
                  </ul>
                  <p className="small-muted">
                    Atención en salud y educación con foco en niños, niñas y familias.
                  </p>
                </article>
              </div>
            </div>
          </section>

          <section className="slide" id="servicios">
            <div className="slide-content">
              <p className="mini-label">Áreas de ayuda</p>
              <h2>Atención clara y personalizada</h2>

              <div className="mini-cards">
                {services.map((service, serviceIndex) => (
                  <article key={service.title} className="mini-card">
                    <span className="card-kicker">0{serviceIndex + 1}</span>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </article>
                ))}
              </div>

              <div className="inline-actions">
                <span>¿Quieres orientación rápida?</span>
                <a className="btn btn-primary" href={whatsappUrl}>
                  Consultar por WhatsApp
                </a>
              </div>
            </div>
          </section>

          <section className="slide" id="confianza">
            <div className="slide-content slide-grid trust-layout">
              <article className="compact-card">
                <p className="mini-label">Por qué elegirla</p>
                <h3>Respaldo humano y profesional</h3>
                <ul className="benefit-list">
                  {benefits.map((benefit) => (
                    <li key={benefit.title}>
                      <strong>{benefit.title}:</strong> {benefit.text}
                    </li>
                  ))}
                </ul>
              </article>

              <article className="compact-card">
                <p className="mini-label">Respaldo breve</p>
                <h3>Formación y experiencia relevante</h3>
                <ul className="credential-list">
                  {credentials.education.map((item) => (
                    <li key={item.institution}>
                      <strong>{item.institution}</strong>
                      <span>{item.degree}</span>
                    </li>
                  ))}
                  {credentials.experience.map((item) => (
                    <li key={item.role}>
                      <strong>{item.role}</strong>
                      <span>{item.period}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </div>
          </section>

          <section className="slide" id="contacto">
            <div className="slide-content contact-layout">
              <p className="mini-label">Contacto directo</p>
              <h2>Agenda tu orientación por WhatsApp</h2>
              <p className="muted">
                Canal principal de atención: WhatsApp. También disponible por correo y LinkedIn.
              </p>

              <div className="actions">
                <a className="btn btn-primary" href={whatsappUrl}>
                  Abrir WhatsApp
                </a>
                <a className="btn btn-secondary" href={`mailto:${profile.email}`}>
                  Enviar correo
                </a>
              </div>

              <div className="contact-row">
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
                <a href={profile.linkedIn} target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
                <span>{profile.location}</span>
              </div>

              <div className="placeholder-row">
                {placeholders.map((item) => (
                  <span key={item.label}>
                    <strong>{item.label}:</strong> {item.value}
                  </span>
                ))}
              </div>

              <p className="contact-note">
                Respuesta rápida por WhatsApp para orientación inicial y coordinación de atención.
              </p>
            </div>
          </section>
        </div>
      </main>

      <footer className="controls">
        <button type="button" className="btn btn-secondary" onClick={prev}>
          Anterior
        </button>
        <span>
          {index + 1} / {slideMeta.length}
        </span>
        <button type="button" className="btn btn-secondary" onClick={next}>
          Siguiente
        </button>
      </footer>
    </div>
  );
}

export default CarouselLanding;
