import { useContext } from 'react';
import { X, Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import './CartSidebar.css';

const CartSidebar = () => {
  const { cart, isCartOpen, toggleCart, updateQuantity, removeFromCart, totalAmount } = useContext(CartContext);

  return (
    <div className={`cart-sidebar-overlay ${isCartOpen ? 'open' : ''}`} onClick={toggleCart}>
      <div className="cart-sidebar" onClick={(e) => e.stopPropagation()}>
        <div className="cart-header">
          <h2>Tu Carrito</h2>
          <button className="close-cart-btn" onClick={toggleCart}>
            <X size={28} />
          </button>
        </div>

        <div className="cart-items">
          {cart.length === 0 ? (
            <div className="empty-cart">
              <ShoppingBag size={48} style={{ margin: '0 auto 15px', opacity: 0.5 }} />
              <p>Tu carrito está vacío</p>
            </div>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.title} />
                <div className="item-details">
                  <span className="item-title">{item.title}</span>
                  <span className="item-price">${item.price.toLocaleString('es-MX')}</span>
                  <div className="qty-controls">
                    <button className="qty-btn" onClick={() => updateQuantity(item.id, -1)}><Minus size={14} /></button>
                    <span>{item.quantity}</span>
                    <button className="qty-btn" onClick={() => updateQuantity(item.id, 1)}><Plus size={14} /></button>
                  </div>
                </div>
                <button className="remove-btn" onClick={() => removeFromCart(item.id)}>
                  <Trash2 size={20} />
                </button>
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div className="cart-footer">
            <div className="cart-total">
              <span>Total:</span>
              <span>${totalAmount.toLocaleString('es-MX')}</span>
            </div>
            <Link to="/checkout" onClick={toggleCart}>
              <button className="btn-primary checkout-btn">Proceder al Pago</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartSidebar;
