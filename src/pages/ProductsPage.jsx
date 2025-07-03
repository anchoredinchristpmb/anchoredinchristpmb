import Navbar from '../components/Navbar';
import './ProductsPage.css';

function ProductsPage() {
  const products = [
    {
      image: 'products/bibles.jpg',
      title: 'Bibles'
    },
    {
      image: 'products/homedecor.jpg',
      title: 'Home Decor'
    },
    {
      image: 'products/Jounalsandnotebooks.jpg',
      title: 'Journals and Notebooks'
    },
    {
      image: 'products/Personalised gifting and homeware.jpg',
      title: 'Personalised Gifts'
    },
    {
      image: 'products/stationary.jpg',
      title: 'Stationery'
    }
  ];

  return (
    <div className="products-page">
      <Navbar />
      <div className="products-container">
        <h1>Our Products</h1>
        <div className="products-grid">
          {products.map((product, index) => (
            <div key={index} className="product-card">
              <div className="product-image">
                <img 
                  src={`${import.meta.env.BASE_URL}${product.image}`} 
                  alt={product.title}
                />
              </div>
              <h3>{product.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductsPage;
