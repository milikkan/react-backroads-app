import logo from '../images/logo.svg';
import { pageLinks, socialLinks } from '../data';
import PageLink from './PageLink';
import SocialLink from './SocialLink';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        <ul className="nav-links" id="nav-links">
          {pageLinks.map((link) => (
            <PageLink
              key={link.id}
              href={link.href}
              linkClass="nav-link"
              text={link.text}
            />
          ))}
        </ul>

        <ul className="nav-icons">
          {socialLinks.map((link) => (
            <SocialLink
              key={link.id}
              href={link.href}
              linkClass="nav-icon"
              icon={link.icon}
            />
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
