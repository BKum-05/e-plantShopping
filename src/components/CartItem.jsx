import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
  selectCartCount,
  selectCartItems,
  selectCartTotal,
} from '../store/CartSlice'

function CartItem() {
  const dispatch = useDispatch()
  const cartItems = useSelector(selectCartItems)
  const totalPlants = useSelector(selectCartCount)
  const totalCost = useSelector(selectCartTotal)
  const items = Object.values(cartItems)

  return (
    <section className="cart-page" aria-label="Shopping cart page">
      <h1>Your Shopping Cart</h1>
      <div className="cart-summary">
        <p>
          Total Plants: <strong>{totalPlants}</strong>
        </p>
        <p>
          Total Cost: <strong>${totalCost.toFixed(2)}</strong>
        </p>
      </div>

      {items.length === 0 ? (
        <p className="empty-cart">Your cart is empty. Add some plants to continue.</p>
      ) : (
        <div className="cart-list">
          {items.map((item) => (
            <article key={item.id} className="cart-card">
              <img src={item.image} alt={item.name} className="cart-image" />
              <div className="cart-details">
                <h2>{item.name}</h2>
                <p>Unit Price: ${item.price.toFixed(2)}</p>
                <p>Quantity: {item.quantity}</p>
                <p>Total: ${(item.price * item.quantity).toFixed(2)}</p>
                <div className="cart-actions">
                  <button
                    type="button"
                    onClick={() => dispatch(increaseQuantity(item.id))}
                  >
                    +
                  </button>
                  <button
                    type="button"
                    onClick={() => dispatch(decreaseQuantity(item.id))}
                    disabled={item.quantity === 1}
                  >
                    -
                  </button>
                  <button
                    type="button"
                    className="delete"
                    onClick={() => dispatch(removeFromCart(item.id))}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}

      <div className="cart-footer-actions">
        <Link to="/plants" className="continue-shopping">
          Continue Shopping
        </Link>
        <button
          type="button"
          className="checkout"
          onClick={() => window.alert('Checkout coming soon!')}
        >
          Checkout
        </button>
      </div>
    </section>
  )
}

export default CartItem
