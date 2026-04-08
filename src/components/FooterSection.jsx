import { navLinks } from '../content';

function FooterSection({ profile }) {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <p className="footer-brand">{profile.professionalName}</p>
          <p>{profile.profession}</p>
          <p>{profile.location}</p>
        </div>

        <nav aria-label="Navegación del pie">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div>
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
          <a href={profile.linkedIn} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}

export default FooterSection;
