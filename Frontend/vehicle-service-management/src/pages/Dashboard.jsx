import { useEffect, useState } from 'react';
import { getDashboard } from '../api/api';
import '../styles/Dashboard.css';

function Dashboard() {
  const [dashboard, setDashboard] = useState(null);

  useEffect(() => {
    getDashboard()
      .then(res => setDashboard(res.data))
      .catch(err => console.error(err));
  }, []);

  if (!dashboard) return <p>Loading...</p>;

  return (
    <div className="dashboard">
      <h2>Dashboard</h2>

      <div className="stats-grid">
        <div className="stat-card">
          <p className="stat-label">Total Vehicles</p>
          <p className="stat-value">{dashboard.totalVehicles}</p>
        </div>
        <div className="stat-card">
          <p className="stat-label">Total Services</p>
          <p className="stat-value">{dashboard.totalServices}</p>
        </div>
        <div className="stat-card">
          <p className="stat-label">Total Service Cost</p>
          <p className="stat-value">₹{dashboard.totalServiceCost}</p>
        </div>
        <div className="stat-card">
          <p className="stat-label">Upcoming Services</p>
          <p className="stat-value">{dashboard.upcomingServices.length}</p>
        </div>
      </div>

      <h3>Upcoming Services (Next 30 Days)</h3>
      {dashboard.upcomingServices.length === 0 ? (
        <p>No upcoming services.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Vehicle Number</th>
              <th>Service Type</th>
              <th>Service Center</th>
              <th>Next Service Date</th>
            </tr>
          </thead>
          <tbody>
            {dashboard.upcomingServices.map(service => (
              <tr key={service.id}>
                <td>{service.vehicleNumber}</td>
                <td>{service.serviceType}</td>
                <td>{service.serviceCenter}</td>
                <td>{service.nextServiceDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Dashboard;