function SectionTitle({ label, title, description, centered = false }) {
  return (
    <div className={`section-title ${centered ? 'centered' : ''}`}>
      {label ? <p className="section-label">{label}</p> : null}
      <h2>{title}</h2>
      {description ? <p className="section-description">{description}</p> : null}
    </div>
  );
}

export default SectionTitle;
