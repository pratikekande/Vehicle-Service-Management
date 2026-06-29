import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addVehicle } from '../api/api';
import '../styles/Form.css';

function AddVehicle() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    ownerName: '',
    vehicleNumber: '',
    brand: '',
    model: '',
    fuelType: '',
    purchaseYear: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addVehicle(form)
      .then(() => navigate('/vehicles'))
      .catch(err => console.error(err));
  };

  return (
    <div className="form-container">
      <div className="form-header">
        <h2>Add Vehicle</h2>
        <p>Enter the details below to add a new vehicle.</p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="form-grid">
          <div className="form-group">
            <label>Owner Name</label>
            <input type="text" name="ownerName" value={form.ownerName} onChange={handleChange} placeholder="e.g. Rahul Sharma" required />
          </div>

          <div className="form-group">
            <label>Vehicle Number</label>
            <input type="text" name="vehicleNumber" value={form.vehicleNumber} onChange={handleChange} placeholder="e.g. MH12AB1234" required />
          </div>

          <div className="form-group">
            <label>Brand</label>
            <input type="text" name="brand" value={form.brand} onChange={handleChange} placeholder="e.g. Honda" required />
          </div>

          <div className="form-group">
            <label>Model</label>
            <input type="text" name="model" value={form.model} onChange={handleChange} placeholder="e.g. Activa" required />
          </div>

          <div className="form-group">
            <label>Fuel Type</label>
            <select name="fuelType" value={form.fuelType} onChange={handleChange} required>
              <option value="">Select Fuel Type</option>
              <option value="Petrol">Petrol</option>
              <option value="Diesel">Diesel</option>
              <option value="Electric">Electric</option>
              <option value="Hybrid">Hybrid</option>
              <option value="CNG">CNG</option>
            </select>
          </div>

          <div className="form-group">
            <label>Purchase Year</label>
            <input type="number" name="purchaseYear" value={form.purchaseYear} onChange={handleChange} placeholder="e.g. 2020" required />
          </div>
        </div>

        <div className="form-actions">
          <button type="button" className="btn-secondary" onClick={() => navigate('/vehicles')}>Cancel</button>
          <button type="submit" className="btn-primary">Save Vehicle</button>
        </div>
      </form>
    </div>
  );
}

export default AddVehicle;