import { navLinks, profile } from '../content';

function Navbar({ whatsappUrl, isWhatsappConfigured }) {
  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <a href="#inicio" className="brand" aria-label="Ir al inicio">
          <span className="brand-name">{profile.professionalName}</span>
          <span className="brand-role">{profile.profession}</span>
        </a>

        <nav className="nav-links" aria-label="Navegación principal">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <a className="btn btn-nav" href={whatsappUrl}>
          WhatsApp
        </a>
      </div>

      {!isWhatsappConfigured ? (
        <p className="config-note" role="note">
          Falta configurar el número de WhatsApp real en <code>src/content.js</code>.
        </p>
      ) : null}
    </header>
  );
}

export default Navbar;
