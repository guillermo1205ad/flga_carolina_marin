import SectionTitle from './SectionTitle';

function ServicesSection({ services }) {
  return (
    <section id="servicios" className="section-spacing">
      <div className="container">
        <SectionTitle
          label="Áreas de Ayuda"
          title="¿En qué puede ayudarte Carolina Marín?"
          description="Información redactada desde el perfil profesional entregado, enfocada en lo que una familia necesita entender para tomar acción."
          centered
        />

        <div className="cards-grid cards-grid-3">
          {services.map((service) => (
            <article key={service.title} className="service-card reveal">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <p className="service-audience">{service.audience}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
