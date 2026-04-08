import SectionTitle from './SectionTitle';

function CredentialsSection({ credentials, sourceLabel }) {
  return (
    <section id="respaldo" className="section-spacing">
      <div className="container">
        <SectionTitle
          label="Respaldo Profesional"
          title="Formación y experiencia relevante, sin formato curricular"
          description="Resumen sintético para reforzar credibilidad sin convertir la landing en un CV online."
          centered
        />

        <div className="credentials-grid">
          <article className="credential-card reveal">
            <h3>Formación principal</h3>
            <ul>
              {credentials.education.map((item) => (
                <li key={item.institution}>
                  <strong>{item.institution}</strong>
                  <span>{item.degree}</span>
                  <small>{item.period}</small>
                </li>
              ))}
            </ul>
          </article>

          <article className="credential-card reveal">
            <h3>Experiencia relevante</h3>
            <ul>
              {credentials.experience.map((item) => (
                <li key={item.role}>
                  <strong>{item.role}</strong>
                  <small>{item.period}</small>
                </li>
              ))}
            </ul>

            <h4>Aptitudes declaradas</h4>
            <div className="skill-pills">
              {credentials.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>

            <p className="source-note">Fuente de datos: {sourceLabel}.</p>
          </article>
        </div>
      </div>
    </section>
  );
}

export default CredentialsSection;
