import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { addService, getAllVehicles } from '../api/api';
import '../styles/Form.css';

function AddService() {
  const navigate = useNavigate();
  const [vehicles, setVehicles] = useState([]);
  const [form, setForm] = useState({
    vehicleId: '',
    serviceDate: '',
    serviceType: '',
    serviceCenter: '',
    cost: '',
    odometerReading: '',
    nextServiceDate: '',
    remarks: ''
  });

  useEffect(() => {
    getAllVehicles()
      .then(res => setVehicles(res.data))
      .catch(err => console.error(err));
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addService(form)
      .then(() => navigate('/services'))
      .catch(err => console.error(err));
  };

  return (
    <div className="form-container">
      <div className="form-header">
        <h2>Add Service Record</h2>
        <p>Document the service performed on the vehicle.</p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="form-grid">
          <div className="form-group">
            <label>Select Vehicle</label>
            <select name="vehicleId" value={form.vehicleId} onChange={handleChange} required>
              <option value="">Select Vehicle</option>
              {vehicles.map(v => (
                <option key={v.id} value={v.id}>
                  {v.vehicleNumber} - {v.ownerName}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label>Service Date</label>
            <input type="date" name="serviceDate" value={form.serviceDate} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label>Service Type</label>
            <input type="text" name="serviceType" value={form.serviceType} onChange={handleChange} placeholder="e.g. Oil Change" required />
          </div>

          <div className="form-group">
            <label>Service Center</label>
            <input type="text" name="serviceCenter" value={form.serviceCenter} onChange={handleChange} placeholder="e.g. Honda Service Center" required />
          </div>

          <div className="form-group">
            <label>Cost (₹)</label>
            <input type="number" name="cost" value={form.cost} onChange={handleChange} placeholder="e.g. 1500" required />
          </div>

          <div className="form-group">
            <label>Odometer Reading (km)</label>
            <input type="number" name="odometerReading" value={form.odometerReading} onChange={handleChange} placeholder="e.g. 15000" required />
          </div>

          <div className="form-group">
            <label>Next Service Date</label>
            <input type="date" name="nextServiceDate" value={form.nextServiceDate} onChange={handleChange} />
          </div>

          <div className="form-group form-full-width">
            <label>Remarks</label>
            <textarea name="remarks" value={form.remarks} onChange={handleChange} placeholder="Any additional notes..." />
          </div>
        </div>

        <div className="form-actions">
          <button type="button" className="btn-secondary" onClick={() => navigate('/services')}>Cancel</button>
          <button type="submit" className="btn-primary">Save Service Record</button>
        </div>
      </form>
    </div>
  );
}

export default AddService;