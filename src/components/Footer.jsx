import { FaGithub, FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer style={{ marginTop: '80px', padding: '40px 0', background: 'var(--bg-color-light)', borderTop: '1px solid var(--glass-border)' }}>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginBottom: '30px' }}>
        <a href="#" className="social-icon" aria-label="Facebook"><FaFacebookF /></a>
        <a href="#" className="social-icon" aria-label="Twitter"><FaTwitter /></a>
        <a href="#" className="social-icon" aria-label="Instagram"><FaInstagram /></a>
      </div>

      <div style={{ textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
        <p>© 2026 GameWorld. Todos los derechos reservados.</p>
        <p style={{ marginTop: '10px' }}>GameWorld S.A. de C.V. Veracruz, México.</p>
      </div>

      <style>{`
        .social-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 50px;
          height: 50px;
          background: var(--bg-color);
          border-radius: 50%;
          color: var(--text-main);
          transition: var(--transition);
          border: 1px solid var(--glass-border);
        }
        .social-icon:hover {
          color: var(--accent-color);
          box-shadow: 0 0 15px var(--accent-glow);
          transform: translateY(-3px);
        }
      `}</style>
    </footer>
  );
};

export default Footer;
