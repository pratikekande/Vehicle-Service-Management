import { Link, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        🚗 Vehicle Service Tracker
      </div>
      <div className="navbar-links">
        <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Dashboard</Link>
        <Link to="/vehicles" className={location.pathname === '/vehicles' ? 'active' : ''}>Vehicles</Link>
        <Link to="/services" className={location.pathname === '/services' ? 'active' : ''}>Service Records</Link>
      </div>
    </nav>
  );
}

export default Navbar;