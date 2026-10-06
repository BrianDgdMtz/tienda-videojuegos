const About = () => {
  return (
    <div className="about-page">
      <div className="about-container glass-panel">
        <h2>SOBRE NOSOTROS</h2>
        <div className="linea"></div>
        <h3>¡BIENVENIDOS A GameWorld!</h3>
        
        <div className="about-content">
          <p>
            GameWorld es una empresa 100% mexicana dedicada a la venta de videojuegos, consolas, accesorios y productos coleccionables. Ponemos a tu alcance lo que más te apasione del mundo de los videojuegos por medio de nuestras sucursales en toda la república mexicana, así como nuestra tienda en línea.
          </p>
          <p>
            Somos un equipo de gamer's apasionados por nuestro trabajo. Para nosotros lo más importantes son los hermanos gamer's como tú. Así que nos levantamos todos los dias con una sola idea en la mente: poner el mejor entretenimiento en videojuegos en tus manos.
          </p>
          <p>
            ¿Quieres enterarte sobre los juegos nuevos que vienen?, ¿Buscas ediciones de colección y producto exclusivo del mundo de los videojuegos? ¡Busca primero en GameWorld!
          </p>
          
          <h4 style={{ color: 'var(--accent-color)', marginTop: '30px', marginBottom: '15px' }}>
            Además te ofrecemos los mejores servicios para complementar tu experiencia de compra:
          </h4>
          
          <ul className="services-list">
            <li><span>🎮</span> Consulta TODO nuestro catálogo en productos desde nuestro sitio web.</li>
            <li><span>🔍</span> Consulta precios y disponibilidad en tiempo real y por tienda.</li>
            <li><span>🎁</span> ¡Te regalamos contenido descargable! En la compra de ciertos juegos podrás obtener códigos gratuitos ya en el paquete de envio.</li>
            <li><span>🚚</span> Enviamos tus juegos hasta la puerta de tu casa. Compra por medio de nuestra tienda en línea y entregamos en la comodidad de tu hogar.</li>
            <li><span>🚀</span> Seguiremos trabajando para agregar servicios que se adapten a lo que buscas, así como mejorar los servicios ya existentes para que tengas una mejor experiencia con nosotros.</li>
          </ul>

          <p style={{ marginTop: '30px', fontStyle: 'italic', color: 'var(--text-muted)' }}>
            Así que, sientete como en casa hermano gamer. Esperamos que esta página esté a la altura de tus expectativas. Y si hay algo que no estamos haciendo y que te gustaría ver ¡Te escuchamos! Envíanos un correo a: gameworld@gmail.com o contáctanos a nuestro número telefónico: 284-100-3445. Haremos todo lo posible por transformar tus ideas en una realidad.
          </p>
          
          <div className="about-signature">
            <p>Atentamente:</p>
            <strong>GameWorld Team.</strong>
          </div>
        </div>
      </div>

      <style>{`
        .about-page {
          padding: 120px 5% 50px;
          min-height: calc(100vh - 80px);
          display: flex;
          justify-content: center;
        }

        .about-container {
          max-width: 900px;
          padding: 50px;
          width: 100%;
        }

        .about-container h2 {
          font-size: 2.5rem;
          color: var(--accent-color);
          text-align: center;
          margin-bottom: 15px;
          letter-spacing: 2px;
        }

        .linea {
          width: 60px;
          height: 4px;
          background: var(--accent-color);
          margin: 0 auto 30px;
          border-radius: 2px;
          box-shadow: 0 0 10px var(--accent-glow);
        }

        .about-container h3 {
          font-size: 1.8rem;
          text-align: center;
          margin-bottom: 40px;
          color: var(--text-main);
        }

        .about-content p {
          line-height: 1.8;
          color: var(--text-muted);
          margin-bottom: 20px;
          font-size: 1.1rem;
        }

        .services-list {
          list-style: none;
          padding: 0;
        }

        .services-list li {
          display: flex;
          align-items: flex-start;
          gap: 15px;
          margin-bottom: 15px;
          line-height: 1.6;
          color: var(--text-muted);
          background: rgba(0, 0, 0, 0.2);
          padding: 15px;
          border-radius: 8px;
          border-left: 3px solid var(--accent-color);
        }

        .services-list span {
          font-size: 1.5rem;
        }

        .about-signature {
          margin-top: 40px;
          text-align: right;
          color: var(--accent-color);
          font-size: 1.2rem;
        }

        @media (max-width: 768px) {
          .about-container {
            padding: 30px 20px;
          }
          .about-container h2 {
            font-size: 2rem;
          }
        }
      `}</style>
    </div>
  );
};

export default About;
