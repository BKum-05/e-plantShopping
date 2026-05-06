import { Link, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectCartCount } from '../store/CartSlice'

function Navbar() {
  const cartCount = useSelector(selectCartCount)
  const location = useLocation()

  return (
    <header className="site-header">
      <div className="site-brand">Paradise Nursery</div>
      <nav aria-label="Main navigation" className="site-nav">
        <Link
          to="/"
          className={location.pathname === '/' ? 'nav-link active' : 'nav-link'}
        >
          Home
        </Link>
        <Link
          to="/plants"
          className={
            location.pathname === '/plants' ? 'nav-link active' : 'nav-link'
          }
        >
          Plants
        </Link>
        <Link
          to="/cart"
          className={location.pathname === '/cart' ? 'nav-link active' : 'nav-link'}
        >
          <span className="cart-link-content">
            <svg
              viewBox="0 0 24 24"
              className="cart-icon"
              aria-hidden="true"
              focusable="false"
            >
              <path
                d="M7 4h-2l-1 2v2h2l2.6 7.6c.1.3.4.4.7.4h8.7v-2h-8l-.5-1.5h8.2c.4 0 .7-.2.8-.6l1.6-4.9h-2.1l-1.1 3.5h-6.8l-.8-2.5h11.4v-2h-12z"
                fill="currentColor"
              />
              <circle cx="10" cy="19" r="1.5" fill="currentColor" />
              <circle cx="17" cy="19" r="1.5" fill="currentColor" />
            </svg>
            Cart ({cartCount})
          </span>
        </Link>
      </nav>
    </header>
  )
}

export default Navbar
