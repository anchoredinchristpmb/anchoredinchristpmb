import { FaInstagram, FaFacebook, FaTiktok, FaWhatsapp } from 'react-icons/fa';
import './ContactForm.css';

export default function ContactForm() {
  return (
    <div className="contact-info">
      <section className="contact-section">
        <h2>Contact Us</h2>
        <p>Orders can be placed directly via:</p>
        <div className="contact-method">
          <p>Email: <a href="mailto:AnchoredinChristPMB@gmail.com">AnchoredinChristPMB@gmail.com</a></p>
          <p>WhatsApp: <a href="https://wa.me/27637749633" className="whatsapp-link"><FaWhatsapp /> 063 774 9633</a></p>
        </div>
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
      </section>

      <section className="payment-section">
        <h2>Payment Information</h2>
        <div className="bank-details">
          <p>Bank: FNB</p>
          <p>Account Name: Anchored in Christ</p>
          <p>Account Number: 63161341127</p>
          <p>Branch Code: 255355</p>
        </div>
        <p className="payment-note">Please use your order number or name as a reference when making your payment.</p>
      </section>
    </div>
  );
}
