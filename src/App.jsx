import { Link, Route, Routes } from 'react-router-dom'
import AboutUs from './components/AboutUs'
import CartItem from './components/CartItem'
import Navbar from './components/Navbar'
import ProductList from './components/ProductList'
import './App.css'

function LandingPage() {
  return (
    <main className="landing-page">
      <div className="landing-overlay">
        <h1>Paradise Nursery</h1>
        <AboutUs />
        <Link to="/plants" className="get-started-button">
          Get Started
        </Link>
      </div>
    </main>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route
        path="/plants"
        element={
          <>
            <Navbar />
            <ProductList />
          </>
        }
      />
      <Route
        path="/cart"
        element={
          <>
            <Navbar />
            <CartItem />
          </>
        }
      />
    </Routes>
  )
}

export default App
