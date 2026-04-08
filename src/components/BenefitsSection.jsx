import SectionTitle from './SectionTitle';

function BenefitsSection({ benefits, whatsappUrl }) {
  return (
    <section id="beneficios" className="section-spacing benefits-wrap">
      <div className="container">
        <SectionTitle
          label="Razones para Elegirla"
          title="Acompañamiento profesional que transmite confianza desde el primer contacto"
          centered
        />

        <div className="cards-grid cards-grid-2">
          {benefits.map((benefit) => (
            <article key={benefit.title} className="benefit-card reveal">
              <h3>{benefit.title}</h3>
              <p>{benefit.text}</p>
            </article>
          ))}
        </div>

        <div className="inline-cta reveal">
          <p>¿Quieres resolver dudas antes de agendar?</p>
          <a className="btn btn-primary" href={whatsappUrl}>
            Hablar por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

export default BenefitsSection;
