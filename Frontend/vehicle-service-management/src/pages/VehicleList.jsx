import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAllVehicles, deleteVehicle, searchByOwner, searchByVehicleNumber } from '../api/api';
import '../styles/VehicleList.css';

function VehicleList() {
  const [vehicles, setVehicles] = useState([]);
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetchVehicles();
  }, []);

  const fetchVehicles = () => {
    getAllVehicles()
      .then(res => setVehicles(res.data))
      .catch(err => console.error(err));
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this vehicle?')) {
      deleteVehicle(id)
        .then(() => fetchVehicles())
        .catch(err => console.error(err));
    }
  };

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearch(value);

    if (value === '') {
      fetchVehicles();
    } else {
      searchByOwner(value)
        .then(res => setVehicles(res.data))
        .catch(err => console.error(err));
    }
  };

  return (
    <div className="vehicle-list">
      <div className="page-header">
        <h2>Vehicles</h2>
        <button className="btn-primary" onClick={() => navigate('/vehicles/add')}>+ Add Vehicle</button>
      </div>

      <input
        type="text"
        placeholder="Search by owner name..."
        value={search}
        onChange={handleSearch}
        className="search-input"
      />

      <table>
        <thead>
          <tr>
            <th>Vehicle Number</th>
            <th>Owner Name</th>
            <th>Brand</th>
            <th>Model</th>
            <th>Fuel Type</th>
            <th>Purchase Year</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {vehicles.length === 0 ? (
            <tr>
              <td colSpan="7" style={{ textAlign: 'center' }}>No vehicles found.</td>
            </tr>
          ) : (
            vehicles.map(vehicle => (
              <tr key={vehicle.id}>
                <td>{vehicle.vehicleNumber}</td>
                <td>{vehicle.ownerName}</td>
                <td>{vehicle.brand}</td>
                <td>{vehicle.model}</td>
                <td>{vehicle.fuelType}</td>
                <td>{vehicle.purchaseYear}</td>
                <td>
                  <div className="action-buttons">
                    <button className="btn-primary" onClick={() => navigate(`/vehicles/edit/${vehicle.id}`)}>Edit</button>
                    <button className="btn-danger" onClick={() => handleDelete(vehicle.id)}>Delete</button>
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

export default VehicleList;