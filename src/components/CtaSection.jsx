function CtaSection({ conversion, whatsappUrl }) {
  return (
    <section className="section-spacing">
      <div className="container">
        <article className="cta-banner reveal">
          <p className="cta-label">Llamado a la acción</p>
          <h2>{conversion.title}</h2>
          <p>{conversion.text}</p>
          <a className="btn btn-light" href={whatsappUrl}>
            Escribirme por WhatsApp
          </a>
        </article>
      </div>
    </section>
  );
}

export default CtaSection;
