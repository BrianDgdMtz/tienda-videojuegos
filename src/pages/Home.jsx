import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { heroSlides } from '../data/products';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ paddingTop: '80px' }}>
      <section className="hero-section">
        <div className="slider-container">
          {heroSlides.map((slide, index) => (
            <div 
              key={index} 
              className={`slide ${index === currentSlide ? 'active' : ''}`}
              style={{ backgroundImage: `url(${slide})` }}
            />
          ))}
          <div className="hero-overlay">
            <h1>Bienvenido a GameWorld</h1>
            <p>Descubre los mejores títulos, ofertas exclusivas y únete a nuestra comunidad gamer.</p>
            <Link to="/tienda">
              <button className="btn-primary" style={{ padding: '15px 40px', fontSize: '1.2rem', marginTop: '20px' }}>
                Explorar Tienda
              </button>
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        .hero-section {
          width: 100%;
          height: calc(100vh - 80px);
          position: relative;
          overflow: hidden;
        }

        .slider-container {
          width: 100%;
          height: 100%;
          position: relative;
        }

        .slide {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-size: cover;
          background-position: center;
          opacity: 0;
          transition: opacity 1s ease-in-out, transform 4s ease-in-out;
          transform: scale(1.05);
        }

        .slide.active {
          opacity: 1;
          transform: scale(1);
        }

        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(to top, var(--bg-color) 0%, rgba(11, 15, 25, 0.4) 100%);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 0 20px;
        }

        .hero-overlay h1 {
          font-size: 4rem;
          margin-bottom: 20px;
          text-shadow: 0 0 20px rgba(0, 242, 254, 0.6);
        }

        .hero-overlay p {
          font-size: 1.2rem;
          color: var(--text-muted);
          max-width: 600px;
          margin-bottom: 30px;
        }

        @media (max-width: 768px) {
          .hero-overlay h1 {
            font-size: 2.5rem;
          }
          .hero-section {
            height: 60vh;
          }
        }
      `}</style>
    </div>
  );
};

export default Home;
