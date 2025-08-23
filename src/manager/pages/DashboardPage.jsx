import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signOut, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../firebase/config';
import { getProducts, getOrders } from '../../firebase/db';
import './DashboardPage.css';

function DashboardPage() {
  const [user, setUser] = useState(null);
  const [productsCount, setProductsCount] = useState(0);
  const [ordersCount, setOrdersCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        // Fetch data when user is authenticated
        fetchDashboardData();
      } else {
        // User is signed out
        navigate('/manager/login');
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  const fetchDashboardData = async () => {
    try {
      setLoading(true);
      const products = await getProducts();
      const orders = await getOrders();
      setProductsCount(products.length);
      setOrdersCount(orders.length);
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/manager/login');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Manager Dashboard</h1>
        <button onClick={handleLogout} className="logout-btn">Logout</button>
      </header>
      
      <div className="dashboard-content">
        {loading ? (
          <div className="loading">Loading dashboard data...</div>
        ) : (
          <>
            <div className="stats-grid">
              <div className="stats-card">
                <h3>Total Products</h3>
                <p className="stat-number">{productsCount}</p>
                <p className="stat-label">Products in inventory</p>
              </div>
              
              <div className="stats-card">
                <h3>Total Orders</h3>
                <p className="stat-number">{ordersCount}</p>
                <p className="stat-label">Customer orders</p>
              </div>
              
              <div className="stats-card">
                <h3>Welcome</h3>
                <p className="stat-number">{user?.email}</p>
                <p className="stat-label">Logged in user</p>
              </div>
            </div>
            
            <div className="dashboard-actions">
              <h3>Quick Actions</h3>
              <div className="action-buttons">
                <button className="action-btn">Add Product</button>
                <button className="action-btn">View Orders</button>
                <button className="action-btn">Manage Inventory</button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default DashboardPage;
