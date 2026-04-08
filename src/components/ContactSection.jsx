function ContactSection({ profile, placeholders, whatsappUrl, isWhatsappConfigured }) {
  return (
    <section id="contacto" className="section-spacing">
      <div className="container contact-wrap">
        <article className="contact-card reveal">
          <p className="section-label">Contacto</p>
          <h2>Conversemos por WhatsApp</h2>
          <p>
            El canal principal de atención es WhatsApp. También puedes escribir por correo o revisar el
            perfil profesional en LinkedIn.
          </p>

          <div className="contact-actions">
            <a className="btn btn-primary" href={whatsappUrl}>
              Abrir WhatsApp
            </a>
            <a className="btn btn-secondary" href={`mailto:${profile.email}`}>
              Enviar correo
            </a>
          </div>

          <div className="contact-links">
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
            <a href={profile.linkedIn} target="_blank" rel="noreferrer">
              Ver perfil LinkedIn
            </a>
          </div>
        </article>

        <aside className="placeholder-card reveal" aria-label="Datos pendientes por completar">
          <h3>Datos editables antes de publicar</h3>
          <ul>
            {placeholders.map((item) => (
              <li key={item.label}>
                <p>
                  <strong>{item.label}:</strong> <code>{item.value}</code>
                </p>
                <span>{item.note}</span>
              </li>
            ))}
          </ul>

          {!isWhatsappConfigured ? (
            <p className="placeholder-warning">
              El botón de WhatsApp quedará 100% operativo al reemplazar el número placeholder.
            </p>
          ) : null}
        </aside>
      </div>
    </section>
  );
}

export default ContactSection;
