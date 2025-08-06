import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './DashboardPage.css';

function DashboardPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('managerLoggedIn') === 'true';
    if (!isLoggedIn) {
      navigate('/manager/login');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('managerLoggedIn');
    navigate('/manager/login');
  };

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Manager Dashboard</h1>
        <button onClick={handleLogout} className="logout-btn">Logout</button>
      </header>
      
      <div className="dashboard-content">
        <div className="stats-card">
          <h3>Overview</h3>
          <p>Welcome to the manager dashboard</p>
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;
