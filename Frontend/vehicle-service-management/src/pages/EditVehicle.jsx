import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getVehicleById, updateVehicle } from '../api/api';
import '../styles/Form.css';

function EditVehicle() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [form, setForm] = useState({
    ownerName: '',
    vehicleNumber: '',
    brand: '',
    model: '',
    fuelType: '',
    purchaseYear: ''
  });

  useEffect(() => {
    getVehicleById(id)
      .then(res => setForm(res.data))
      .catch(err => console.error(err));
  }, [id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateVehicle(id, form)
      .then(() => navigate('/vehicles'))
      .catch(err => console.error(err));
  };

  return (
    <div className="form-container">
      <div className="form-header">
        <h2>Edit Vehicle</h2>
        <p>Update the details for vehicle {form.vehicleNumber}.</p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="form-grid">
          <div className="form-group">
            <label>Owner Name</label>
            <input type="text" name="ownerName" value={form.ownerName} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label>Vehicle Number</label>
            <input type="text" name="vehicleNumber" value={form.vehicleNumber} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label>Brand</label>
            <input type="text" name="brand" value={form.brand} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label>Model</label>
            <input type="text" name="model" value={form.model} onChange={handleChange} required />
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
            <input type="number" name="purchaseYear" value={form.purchaseYear} onChange={handleChange} required />
          </div>
        </div>

        <div className="form-actions">
          <button type="button" className="btn-secondary" onClick={() => navigate('/vehicles')}>Cancel</button>
          <button type="submit" className="btn-primary">Update Vehicle</button>
        </div>
      </form>
    </div>
  );
}

export default EditVehicle;