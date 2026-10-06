import { useState } from 'react';
import { Mail } from 'lucide-react';
import { FaFacebookF } from 'react-icons/fa';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="login-page">
      <div className="login-container glass-panel">
        
        {/* Lado Informativo / Social */}
        <div className="login-info">
          <h2>¡Hola Gamer!</h2>
          <p>
            Nos complace tenerte de vuelta como miembro de esta bonita comunidad. 
            Ingresa con tu perfil para acceder a tu cuenta. ¡Keep Gaming!
          </p>
          <div className="social-buttons">
            <button className="social-btn facebook">
              <FaFacebookF size={20} /> Ingresa con Facebook
            </button>
            <button className="social-btn google">
              <Mail size={20} /> Ingresa con Google
            </button>
          </div>
        </div>

        {/* Formularios */}
        <div className="forms-container">
          <div className={`form-wrapper ${isLogin ? 'show' : 'hide'}`}>
            <h2>Iniciar Sesión</h2>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="input-group">
                <label>Usuario</label>
                <input type="text" required />
              </div>
              <div className="input-group">
                <label>Contraseña</label>
                <input type="password" required />
              </div>
              <button type="submit" className="btn-primary" style={{ width: '100%', marginTop: '20px' }}>
                Entrar
              </button>
            </form>
            <p className="toggle-text">
              ¿No tienes cuenta? <span onClick={() => setIsLogin(false)}>Regístrate</span>
            </p>
          </div>

          <div className={`form-wrapper ${!isLogin ? 'show' : 'hide'}`}>
            <h2>Registrarse</h2>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="input-group">
                <label>Usuario</label>
                <input type="text" required />
              </div>
              <div className="input-group">
                <label>Correo Electrónico</label>
                <input type="email" required />
              </div>
              <div className="input-group">
                <label>Contraseña</label>
                <input type="password" required minLength="8" />
              </div>
              <button type="submit" className="btn-primary" style={{ width: '100%', marginTop: '20px' }}>
                Crear Cuenta
              </button>
            </form>
            <p className="toggle-text">
              ¿Ya tienes una cuenta? <span onClick={() => setIsLogin(true)}>Inicia sesión</span>
            </p>
          </div>
        </div>

      </div>

      <style>{`
        .login-page {
          min-height: calc(100vh - 80px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 100px 20px 50px;
        }

        .login-container {
          display: flex;
          width: 100%;
          max-width: 1000px;
          min-height: 550px;
          overflow: hidden;
          background: rgba(11, 15, 25, 0.8);
        }

        .login-info {
          flex: 1;
          padding: 50px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          background: linear-gradient(135deg, rgba(0, 242, 254, 0.1), rgba(79, 172, 254, 0.1));
          border-right: 1px solid var(--glass-border);
        }

        .login-info h2 {
          font-size: 2.5rem;
          margin-bottom: 20px;
          color: var(--accent-color);
        }

        .login-info p {
          color: var(--text-muted);
          line-height: 1.6;
          margin-bottom: 40px;
        }

        .social-buttons {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .social-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 12px;
          border-radius: 8px;
          border: none;
          font-weight: 600;
          cursor: pointer;
          transition: var(--transition);
          font-size: 1rem;
        }

        .social-btn.facebook {
          background: #1877f2;
          color: white;
        }

        .social-btn.google {
          background: #ea4335;
          color: white;
        }

        .social-btn:hover {
          transform: translateY(-2px);
          filter: brightness(1.1);
        }

        .forms-container {
          flex: 1;
          position: relative;
          padding: 50px;
          background: rgba(22, 28, 45, 0.9);
        }

        .form-wrapper {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          padding: 50px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          transition: all 0.5s ease-in-out;
          opacity: 0;
          pointer-events: none;
          transform: translateX(50px);
        }

        .form-wrapper.show {
          opacity: 1;
          pointer-events: all;
          transform: translateX(0);
        }

        .form-wrapper h2 {
          font-size: 2rem;
          margin-bottom: 30px;
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

        .input-group input {
          width: 100%;
          padding: 12px 15px;
          background: rgba(0, 0, 0, 0.2);
          border: 1px solid var(--glass-border);
          border-radius: 8px;
          color: white;
          outline: none;
          transition: var(--transition);
        }

        .input-group input:focus {
          border-color: var(--accent-color);
          box-shadow: 0 0 10px rgba(0, 242, 254, 0.2);
        }

        .toggle-text {
          text-align: center;
          margin-top: 30px;
          color: var(--text-muted);
        }

        .toggle-text span {
          color: var(--accent-color);
          cursor: pointer;
          font-weight: 600;
        }

        .toggle-text span:hover {
          text-decoration: underline;
        }

        @media (max-width: 900px) {
          .login-container {
            flex-direction: column;
          }
          .login-info {
            border-right: none;
            border-bottom: 1px solid var(--glass-border);
            padding: 40px 20px;
          }
          .forms-container {
            min-height: 450px;
            padding: 20px;
          }
          .form-wrapper {
            padding: 30px 20px;
          }
        }
      `}</style>
    </div>
  );
};

export default Login;
