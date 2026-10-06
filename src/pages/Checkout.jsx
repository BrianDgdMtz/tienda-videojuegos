import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { CheckCircle } from 'lucide-react';

const Checkout = () => {
  const { cart, totalAmount, clearCart } = useContext(CartContext);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const navigate = useNavigate();

  const handleCheckout = (e) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simular procesamiento de pago
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
      clearCart();
    }, 2000);
  };

  if (isSuccess) {
    return (
      <div className="checkout-page success-view">
        <div className="glass-panel" style={{ padding: '50px 30px', maxWidth: '500px', width: '100%', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <div style={{ background: 'rgba(0, 242, 254, 0.1)', padding: '20px', borderRadius: '50%', marginBottom: '25px', border: '1px solid rgba(0, 242, 254, 0.3)' }}>
            <CheckCircle size={80} color="#00f2fe" />
          </div>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '15px', color: 'var(--accent-color)' }}>¡Pago Exitoso!</h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '35px', fontSize: '1.1rem', lineHeight: '1.6' }}>
            Gracias por tu compra. Te hemos enviado un correo con los detalles de tu pedido y las instrucciones de descarga.
          </p>
          <button className="btn-primary" style={{ padding: '15px 40px', fontSize: '1.1rem' }} onClick={() => navigate('/')}>Volver al Inicio</button>
        </div>
      </div>
    );
  }

  return (
    <div className="checkout-page">
      <div className="checkout-container">
        
        <div className="checkout-form glass-panel">
          <h2>Detalles de Facturación</h2>
          <form onSubmit={handleCheckout}>
            <div className="form-row">
              <div className="input-group">
                <label>Nombre Completo</label>
                <input type="text" required />
              </div>
              <div className="input-group">
                <label>Correo Electrónico</label>
                <input type="email" required />
              </div>
            </div>

            <h3 style={{ margin: '30px 0 15px' }}>Información de Pago</h3>
            <div className="input-group">
              <label>Número de Tarjeta</label>
              <input type="text" placeholder="0000 0000 0000 0000" required maxLength="19" />
            </div>
            <div className="form-row">
              <div className="input-group">
                <label>Vencimiento (MM/AA)</label>
                <input type="text" placeholder="MM/AA" required maxLength="5" />
              </div>
              <div className="input-group">
                <label>CVV</label>
                <input type="password" placeholder="123" required maxLength="4" />
              </div>
            </div>

            <button 
              type="submit" 
              className="btn-primary" 
              style={{ width: '100%', marginTop: '30px', padding: '15px', fontSize: '1.2rem' }}
              disabled={isProcessing || cart.length === 0}
            >
              {isProcessing ? 'Procesando...' : `Pagar $${totalAmount.toLocaleString('es-MX')}`}
            </button>
          </form>
        </div>

        <div className="checkout-summary glass-panel">
          <h2>Resumen del Pedido</h2>
          <div className="summary-items">
            {cart.map(item => (
              <div key={item.id} className="summary-item">
                <img src={item.image} alt={item.title} />
                <div className="summary-item-info">
                  <span>{item.title}</span>
                  <span className="qty">x{item.quantity}</span>
                </div>
                <span className="summary-item-price">${(item.price * item.quantity).toLocaleString('es-MX')}</span>
              </div>
            ))}
          </div>
          <div className="summary-total">
            <span>Total a pagar</span>
            <span>${totalAmount.toLocaleString('es-MX')}</span>
          </div>
        </div>

      </div>

      <style>{`
        .checkout-page {
          min-height: calc(100vh - 80px);
          padding: 120px 5% 50px;
        }

        .success-view {
          display: flex;
          justify-content: center;
          align-items: flex-start;
          padding-top: 160px;
        }

        .checkout-container {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 30px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .checkout-form, .checkout-summary {
          padding: 30px;
        }

        .checkout-form h2, .checkout-summary h2 {
          margin-bottom: 30px;
          color: var(--accent-color);
          border-bottom: 1px solid var(--glass-border);
          padding-bottom: 15px;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
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
          padding: 12px;
          background: rgba(0,0,0,0.2);
          border: 1px solid var(--glass-border);
          border-radius: 8px;
          color: white;
          outline: none;
        }

        .input-group input:focus {
          border-color: var(--accent-color);
        }

        .summary-items {
          max-height: 400px;
          overflow-y: auto;
          margin-bottom: 20px;
        }

        .summary-item {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-bottom: 15px;
          padding-bottom: 15px;
          border-bottom: 1px solid rgba(255,255,255,0.05);
        }

        .summary-item img {
          width: 50px;
          height: 70px;
          object-fit: cover;
          border-radius: 4px;
        }

        .summary-item-info {
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .qty {
          color: var(--text-muted);
          font-size: 0.85rem;
        }

        .summary-total {
          display: flex;
          justify-content: space-between;
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--accent-color);
          border-top: 1px solid var(--glass-border);
          padding-top: 20px;
        }

        @media (max-width: 900px) {
          .checkout-container {
            grid-template-columns: 1fr;
          }
          .checkout-summary {
            order: -1;
          }
        }
      `}</style>
    </div>
  );
};

export default Checkout;
