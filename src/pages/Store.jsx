import { useState, useContext } from 'react';
import { Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import { CartContext } from '../context/CartContext';

const Store = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todas');
  const { addToCart } = useContext(CartContext);

  const categories = ['Todas', ...new Set(products.map(p => p.category))];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'Todas' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div style={{ paddingTop: '100px', minHeight: '100vh', padding: '100px 5% 50px' }}>
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1 style={{ fontSize: '3rem', color: 'var(--accent-color)', textShadow: '0 0 15px var(--accent-glow)' }}>
          Catálogo de Juegos
        </h1>
        <p style={{ color: 'var(--text-muted)' }}>Encuentra tu próxima aventura</p>
      </div>

      <div className="filters-bar glass-panel">
        <div className="search-box">
          <Search size={20} color="var(--text-muted)" />
          <input 
            type="text" 
            placeholder="Buscar juegos..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="category-filters">
          {categories.map(category => (
            <button 
              key={category} 
              className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="products-grid">
        {filteredProducts.length === 0 ? (
          <p style={{ textAlign: 'center', gridColumn: '1 / -1', color: 'var(--text-muted)' }}>
            No se encontraron juegos con esos filtros.
          </p>
        ) : (
          filteredProducts.map(product => (
            <div key={product.id} className="product-card glass-panel">
              <Link to={`/producto/${product.id}`} className="img-container">
                <img src={product.image} alt={product.title} />
              </Link>
              <div className="card-content">
                <span className="category-badge">{product.category}</span>
                <Link to={`/producto/${product.id}`}>
                  <h3 className="product-title">{product.title}</h3>
                </Link>
                <div className="price-row">
                  <span className="product-price">${product.price.toLocaleString('es-MX')}</span>
                  <button className="btn-primary" onClick={() => addToCart(product)}>
                    Agregar
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      <style>{`
        .filters-bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 15px 20px;
          margin-bottom: 40px;
          flex-wrap: wrap;
          gap: 20px;
        }

        .search-box {
          display: flex;
          align-items: center;
          gap: 10px;
          background: rgba(255, 255, 255, 0.05);
          padding: 10px 15px;
          border-radius: 8px;
          border: 1px solid var(--glass-border);
          flex: 1;
          min-width: 250px;
        }

        .search-box input {
          background: transparent;
          border: none;
          color: white;
          outline: none;
          width: 100%;
          font-family: 'Inter', sans-serif;
        }

        .category-filters {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }

        .filter-btn {
          background: transparent;
          border: 1px solid var(--glass-border);
          color: var(--text-muted);
          padding: 8px 16px;
          border-radius: 20px;
          cursor: pointer;
          transition: var(--transition);
        }

        .filter-btn:hover, .filter-btn.active {
          background: var(--accent-color);
          color: #000;
          border-color: var(--accent-color);
          box-shadow: 0 0 10px var(--accent-glow);
        }

        .products-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 30px;
        }

        .product-card {
          display: flex;
          flex-direction: column;
          overflow: hidden;
          transition: var(--transition);
        }

        .product-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 30px rgba(0,0,0,0.5);
          border-color: var(--accent-color);
        }

        .img-container {
          width: 100%;
          height: 350px;
          overflow: hidden;
        }

        .img-container img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .product-card:hover .img-container img {
          transform: scale(1.1);
        }

        .card-content {
          padding: 20px;
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .category-badge {
          background: rgba(255, 255, 255, 0.1);
          padding: 4px 8px;
          border-radius: 4px;
          font-size: 0.75rem;
          color: var(--accent-color);
          width: fit-content;
          margin-bottom: 10px;
        }

        .product-title {
          font-size: 1.2rem;
          margin-bottom: 15px;
          flex: 1;
        }

        .price-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: auto;
        }

        .product-price {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--text-main);
        }
      `}</style>
    </div>
  );
};

export default Store;
