import { Phone, Mail, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-container">
        <div className="contact-info glass-panel">
          <h2>Contáctanos</h2>
          <p>Hola, si tienes alguna queja y/o comentario, puedes enviarnos un mensaje en esta seccion. <br/><br/> Atte: GameWorld Team :D</p>
          
          <div className="info-links">
            <a href="tel:2841003445" className="info-item">
              <Phone size={24} className="info-icon" />
              <span>284-100-3445</span>
            </a>
            <a href="mailto:gameworld@gmail.com" className="info-item">
              <Mail size={24} className="info-icon" />
              <span>gameworld@gmail.com</span>
            </a>
            <div className="info-item">
              <MapPin size={24} className="info-icon" />
              <span>Veracruz, México</span>
            </div>
          </div>
        </div>

        <div className="contact-form glass-panel">
          <h3>Envíanos un mensaje</h3>
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="input-group">
              <label>Tu Nombre</label>
              <input type="text" placeholder="Ej. Mario Bros" required />
            </div>
            <div className="input-group">
              <label>Tu Email</label>
              <input type="email" placeholder="ejemplo@correo.com" required />
            </div>
            <div className="input-group">
              <label>Tu Mensaje</label>
              <textarea placeholder="Escribe tu mensaje aquí..." required rows="5"></textarea>
            </div>
            <button type="submit" className="btn-primary" style={{ width: '100%', marginTop: '10px' }}>
              Enviar Mensaje
            </button>
          </form>
        </div>
      </div>

      <style>{`
        .contact-page {
          padding: 120px 5% 50px;
          min-height: calc(100vh - 80px);
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .contact-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          max-width: 1000px;
          width: 100%;
        }

        .contact-info, .contact-form {
          padding: 40px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .contact-info {
          background: linear-gradient(135deg, rgba(0, 242, 254, 0.1), rgba(79, 172, 254, 0.1));
          border-right: 2px solid var(--accent-color);
        }

        .contact-info h2 {
          font-size: 2.5rem;
          color: var(--accent-color);
          margin-bottom: 20px;
        }

        .contact-info p {
          color: var(--text-muted);
          line-height: 1.6;
          margin-bottom: 40px;
          font-size: 1.1rem;
        }

        .info-links {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .info-item {
          display: flex;
          align-items: center;
          gap: 15px;
          color: var(--text-main);
          font-size: 1.1rem;
          transition: var(--transition);
        }

        a.info-item:hover {
          color: var(--accent-color);
          transform: translateX(5px);
        }

        .info-icon {
          color: var(--accent-color);
        }

        .contact-form h3 {
          font-size: 1.8rem;
          margin-bottom: 30px;
          color: var(--text-main);
        }

        .input-group {
          margin-bottom: 20px;
        }

        .input-group label {
          display: block;
          margin-bottom: 8px;
          color: var(--text-muted);
          font-size: 0.9rem;
        }

        .input-group input, .input-group textarea {
          width: 100%;
          padding: 12px 15px;
          background: rgba(0, 0, 0, 0.2);
          border: 1px solid var(--glass-border);
          border-radius: 8px;
          color: white;
          outline: none;
          transition: var(--transition);
          font-family: inherit;
        }

        .input-group input:focus, .input-group textarea:focus {
          border-color: var(--accent-color);
          box-shadow: 0 0 10px rgba(0, 242, 254, 0.2);
        }

        .input-group textarea {
          resize: vertical;
        }

        @media (max-width: 768px) {
          .contact-container {
            grid-template-columns: 1fr;
          }
          .contact-info {
            border-right: none;
            border-bottom: 2px solid var(--accent-color);
          }
        }
      `}</style>
    </div>
  );
};

export default Contact;
