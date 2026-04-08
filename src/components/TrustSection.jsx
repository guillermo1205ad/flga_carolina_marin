import SectionTitle from './SectionTitle';

function TrustSection({ trust }) {
  return (
    <section id="presentacion" className="section-spacing">
      <div className="container two-column">
        <div className="reveal">
          <SectionTitle label="Presentación" title={trust.title} />
          <div className="trust-text">
            {trust.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>

        <blockquote className="quote-card reveal">
          <p>{trust.quote}</p>
        </blockquote>
      </div>
    </section>
  );
}

export default TrustSection;
