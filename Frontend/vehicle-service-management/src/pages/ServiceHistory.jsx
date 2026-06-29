import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAllServices, deleteService } from '../api/api';
import '../styles/ServiceHistory.css';

function ServiceHistory() {
  const [services, setServices] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = () => {
    getAllServices()
      .then(res => setServices(res.data))
      .catch(err => console.error(err));
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this service record?')) {
      deleteService(id)
        .then(() => fetchServices())
        .catch(err => console.error(err));
    }
  };

  return (
    <div className="service-history">
      <div className="page-header">
        <h2>Service Records</h2>
        <button className="btn-primary" onClick={() => navigate('/services/add')}>+ Add Service</button>
      </div>

      <table>
        <thead>
          <tr>
            <th>Vehicle Number</th>
            <th>Service Date</th>
            <th>Service Type</th>
            <th>Service Center</th>
            <th>Cost</th>
            <th>Odometer</th>
            <th>Next Service Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {services.length === 0 ? (
            <tr>
              <td colSpan="8" style={{ textAlign: 'center' }}>No service records found.</td>
            </tr>
          ) : (
            services.map(service => (
              <tr key={service.id}>
                <td>{service.vehicleNumber}</td>
                <td>{service.serviceDate}</td>
                <td>{service.serviceType}</td>
                <td>{service.serviceCenter}</td>
                <td>₹{service.cost}</td>
                <td>{service.odometerReading} km</td>
                <td>{service.nextServiceDate || '-'}</td>
                <td>
                  <div className="action-buttons">
                    <button className="btn-primary" onClick={() => navigate(`/services/edit/${service.id}`)}>Edit</button>
                    <button className="btn-danger" onClick={() => handleDelete(service.id)}>Delete</button>
                  </div>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default ServiceHistory;