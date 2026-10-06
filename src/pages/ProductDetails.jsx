import { useContext, useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ShoppingCart, Star, ArrowLeft } from 'lucide-react';
import { products } from '../data/products';
import { CartContext } from '../context/CartContext';

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const [visibleReviews, setVisibleReviews] = useState(3);
  
  const product = products.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
    setVisibleReviews(3); // Reset visible reviews when changing product
  }, [id]);

  if (!product) {
    return (
      <div style={{ paddingTop: '120px', textAlign: 'center', minHeight: '60vh' }}>
        <h2>Producto no encontrado</h2>
        <Link to="/tienda" style={{ color: 'var(--accent-color)' }}>Volver a la tienda</Link>
      </div>
    );
  }

  return (
    <div className="product-details-page">
      <div className="back-link-container">
        <Link to="/tienda" className="back-link">
          <ArrowLeft size={20} /> Volver a la Tienda
        </Link>
      </div>

      <div className="details-container glass-panel">
        <div className="details-img-col">
          <img src={product.image} alt={product.title} className="main-cover" />
        </div>
        
        <div className="details-info-col">
          <span className="badge">{product.category}</span>
          <h1 className="title">{product.title}</h1>
          <h2 className="price">${product.price.toLocaleString('es-MX')}</h2>
          
          <div className="synopsis">
            <h3>Sinopsis</h3>
            <p>{product.synopsis}</p>
          </div>

          <button className="btn-primary add-to-cart-btn" onClick={() => addToCart(product)}>
            <ShoppingCart size={20} /> Agregar al Carrito
          </button>
        </div>
      </div>

      {product.trailer && (
        <div className="trailer-section glass-panel">
          <h3>Tráiler Oficial</h3>
          <div className="video-container">
            <iframe 
              src={product.trailer} 
              title={`Trailer de ${product.title}`} 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>
            </iframe>
          </div>
        </div>
      )}

      <div className="reviews-section glass-panel">
        <h3>Reseñas de la Comunidad</h3>
        {product.reviews && product.reviews.length > 0 ? (
          <>
            <div className="reviews-list">
              {product.reviews.slice(0, visibleReviews).map((review, idx) => (
                <div key={idx} className="review-card">
                  <div className="review-header">
                    <strong>{review.user}</strong>
                    <div className="stars">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={16} fill={i < review.rating ? "#ffd700" : "transparent"} color={i < review.rating ? "#ffd700" : "var(--text-muted)"} />
                      ))}
                    </div>
                  </div>
                  <p>"{review.comment}"</p>
                </div>
              ))}
            </div>
            {visibleReviews < product.reviews.length && (
              <button 
                className="btn-primary" 
                style={{ marginTop: '20px', background: 'transparent', border: '1px solid var(--accent-color)', color: 'var(--accent-color)' }}
                onClick={() => setVisibleReviews(prev => prev + 3)}
              >
                Cargar más reseñas
              </button>
            )}
          </>
        ) : (
          <p style={{ color: 'var(--text-muted)' }}>Aún no hay reseñas para este juego.</p>
        )}
      </div>

      <style>{`
        .product-details-page {
          padding: 100px 5% 50px;
          max-width: 1200px;
          margin: 0 auto;
          min-height: calc(100vh - 80px);
        }

        .back-link-container {
          margin-bottom: 20px;
        }

        .back-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: var(--text-muted);
          font-weight: 500;
          transition: var(--transition);
        }

        .back-link:hover {
          color: var(--accent-color);
        }

        .details-container {
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          gap: 40px;
          padding: 40px;
          margin-bottom: 40px;
        }

        .main-cover {
          width: 100%;
          border-radius: 12px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.5);
        }

        .badge {
          background: rgba(255, 255, 255, 0.1);
          padding: 6px 12px;
          border-radius: 4px;
          font-size: 0.9rem;
          color: var(--accent-color);
          display: inline-block;
          margin-bottom: 20px;
        }

        .title {
          font-size: 3rem;
          margin-bottom: 15px;
          text-shadow: 0 0 10px var(--accent-glow);
        }

        .price {
          font-size: 2.5rem;
          color: var(--text-main);
          margin-bottom: 30px;
        }

        .synopsis h3, .trailer-section h3, .reviews-section h3 {
          color: var(--accent-color);
          margin-bottom: 15px;
          font-size: 1.5rem;
        }

        .synopsis p {
          color: var(--text-muted);
          line-height: 1.6;
          font-size: 1.1rem;
          margin-bottom: 40px;
        }

        .add-to-cart-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          width: 100%;
          padding: 15px;
          font-size: 1.2rem;
        }

        .trailer-section, .reviews-section {
          padding: 40px;
          margin-bottom: 40px;
        }

        .video-container {
          position: relative;
          padding-bottom: 56.25%; /* 16:9 */
          height: 0;
          overflow: hidden;
          border-radius: 12px;
        }

        .video-container iframe {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        .reviews-list {
          display: grid;
          gap: 20px;
        }

        .review-card {
          background: rgba(0,0,0,0.3);
          padding: 20px;
          border-radius: 8px;
          border-left: 4px solid var(--accent-color);
        }

        .review-header {
          display: flex;
          justify-content: space-between;
          margin-bottom: 10px;
        }

        .stars {
          display: flex;
          gap: 5px;
        }

        @media (max-width: 900px) {
          .details-container {
            grid-template-columns: 1fr;
            padding: 20px;
          }
          .title {
            font-size: 2rem;
          }
          .trailer-section, .reviews-section {
            padding: 20px;
          }
        }
      `}</style>
    </div>
  );
};

export default ProductDetails;
