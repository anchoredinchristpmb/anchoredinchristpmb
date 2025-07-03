import { FaInstagram, FaFacebook, FaTiktok } from 'react-icons/fa'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import ContactForm from './components/ContactForm'
import ProductsPage from './pages/ProductsPage'
import './global.css'
import './App.css'
import { Link } from 'react-router-dom'

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <section id="home" className="hero">
              <div className="hero-content">
                <h1>Anchored in Christ</h1>
                <p>Holding fast to the unshakable hope we have in Jesus</p>
              </div>
            </section>

            <section id="mission" className="section">
              <h2>Our Mission & Vision</h2>
              <div className="section-content">
                <div className="mission-statement">
                  <h3>Mission</h3>
                  <p>Our mission is to glorify the name of Jesus Christ by equipping believers through high-quality Christian merchandise and personalized faith-based gifts. We are committed to offering products and services that nurture a deeper walk with Christ, inspire spiritual growth, and provide meaningful ways to bless others in His name.</p>
                  <p>Being Anchored in Christ means holding fast to the unshakable hope we have in Jesus—trusting fully in His promises and drawing strength from His Spirit.</p>
                </div>
                
                <div className="vision-statement">
                  <h3>Vision</h3>
                  <p>Our vision is to establish a nationally recognized retail presence that sets the standard for excellence in Christian gifting and merchandise. Through this, we aim to be a powerful vehicle for spreading the Gospel of Jesus Christ to the nations.</p>
                  <p>We aspire to build and grow the Anchored in Christ brand as a trusted source of spiritual encouragement, where every interaction with our products and services leads to upliftment, inspiration, and eternal impact.</p>
                </div>
              </div>
            </section>

            <section id="products" className="section alt">
              <h2>Our Products</h2>
              <div className="section-content">
                <div className="products-grid">
                  <div className="product-card">
                    <div className="product-image">
                      <img src={`${import.meta.env.BASE_URL}FaithBasedApparel.png`} alt="Faith-Based Apparel" />
                    </div>
                    <h3>Faith-Based Apparel</h3>
                    <p>High-quality Christian t-shirts and accessories</p>
                  </div>
                  
                  <div className="product-card">
                    <div className="product-image">
                      <img src={`${import.meta.env.BASE_URL}DevotionalMaterials.png`} alt="Devotional Materials" />
                    </div>
                    <h3>Devotional Materials</h3>
                    <p>Books and journals for spiritual growth</p>
                  </div>
                  
                  <div className="product-card">
                    <div className="product-image">
                      <img src={`${import.meta.env.BASE_URL}HomeDecor.png`} alt="Home Decor" />
                    </div>
                    <h3>Home Decor</h3>
                    <p>Scripture-based decor for your home</p>
                  </div>
                </div>
                <div className="see-more-container">
                  <Link to="/products" className="see-more-button">View All Products</Link>
                </div>
              </div>
            </section>

            <section id="contact" className="section">
              <h2>Contact Us</h2>
              <div className="section-content">
                <ContactForm />
              </div>
            </section>

            <footer>
              <div className="footer-content">
                <div className="footer-section">
                  <h3>Anchored in Christ</h3>
                  <p>Holding fast to the unshakable hope we have in Jesus</p>
                </div>
                <div className="footer-section">
                  <h3>Quick Links</h3>
                  <a href="#home">Home</a>
                  <a href="#mission">Mission</a>
                  <a href="#products">Products</a>
                  <a href="#contact">Contact</a>
                </div>
                <div className="footer-section">
                  <h3>Connect With Us</h3>
                  <p>Email: AnchoredinChristPMB@gmail.com</p>
                  <p>WhatsApp: 063 938 6334</p>
                  <p>Contact Person: Thiloshnee Marie</p>
                  <div className="social-icons">
                    <a href="https://instagram.com/anchoredinchrist_pmb" target="_blank" rel="noopener noreferrer">
                      <FaInstagram className="social-icon" />
                    </a>
                    <a href="https://facebook.com/anchoredinchristpmb" target="_blank" rel="noopener noreferrer">
                      <FaFacebook className="social-icon" />
                    </a>
                    <a href="https://tiktok.com/@anchoredinchrist_pmb" target="_blank" rel="noopener noreferrer">
                      <FaTiktok className="social-icon" />
                    </a>
                  </div>
                </div>
              </div>
              <p className="copyright">&copy; {new Date().getFullYear()} Anchored in Christ. All rights reserved.</p>
            </footer>
          </>
        } />
        <Route path="/products" element={<ProductsPage />} />
      </Routes>
    </div>
  )
}

export default App
