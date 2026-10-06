import { useContext, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Menu, X, Gamepad2 } from 'lucide-react';
import { CartContext } from '../context/CartContext';
import './Navbar.css';

const Navbar = () => {
  const { cart, toggleCart } = useContext(CartContext);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const cartItemsCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className={`navbar-header ${scrolled ? 'navbar-scrolled' : ''}`}>
      <Link to="/" className="logo" onClick={closeMenu}>
        <Gamepad2 size={36} color="#00f2fe" style={{ marginRight: '10px', verticalAlign: 'middle' }} />
        <span style={{ fontSize: '1.5rem', fontWeight: '800', fontFamily: 'Outfit' }}>Game<span style={{color: '#00f2fe'}}>World</span></span>
      </Link>

      <nav className={`nav-links ${mobileMenuOpen ? 'mobile-open' : ''}`}>
        <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} onClick={closeMenu}>Inicio</Link>
        <Link to="/quienes-somos" className={`nav-link ${location.pathname === '/quienes-somos' ? 'active' : ''}`} onClick={closeMenu}>Quiénes somos</Link>
        <Link to="/tienda" className={`nav-link ${location.pathname === '/tienda' ? 'active' : ''}`} onClick={closeMenu}>Tienda</Link>
        <Link to="/contacto" className={`nav-link ${location.pathname === '/contacto' ? 'active' : ''}`} onClick={closeMenu}>Contáctanos</Link>
        <Link to="/login" className={`nav-link ${location.pathname === '/login' ? 'active' : ''}`} onClick={closeMenu}>Login</Link>
      </nav>

      <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
        <button className="cart-icon-btn" onClick={toggleCart} aria-label="Abrir carrito">
          <ShoppingCart size={24} />
          {cartItemsCount > 0 && <span className="cart-badge">{cartItemsCount}</span>}
        </button>
        
        <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
    </header>
  );
};

export default Navbar;
