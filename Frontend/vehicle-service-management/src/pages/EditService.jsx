import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getServiceById, updateService, getAllVehicles } from '../api/api';
import '../styles/Form.css';

function EditService() {
  const navigate = useNavigate();
  const { id } = useParams();
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

    getServiceById(id)
      .then(res => {
        const data = res.data;
        setForm({
          vehicleId: data.vehicleId,
          serviceDate: data.serviceDate,
          serviceType: data.serviceType,
          serviceCenter: data.serviceCenter,
          cost: data.cost,
          odometerReading: data.odometerReading,
          nextServiceDate: data.nextServiceDate || '',
          remarks: data.remarks || ''
        });
      })
      .catch(err => console.error(err));
  }, [id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateService(id, form)
      .then(() => navigate('/services'))
      .catch(err => console.error(err));
  };

  return (
    <div className="form-container">
      <div className="form-header">
        <h2>Edit Service Record</h2>
        <p>Update the service details.</p>
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
            <input type="text" name="serviceType" value={form.serviceType} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label>Service Center</label>
            <input type="text" name="serviceCenter" value={form.serviceCenter} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label>Cost (₹)</label>
            <input type="number" name="cost" value={form.cost} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label>Odometer Reading (km)</label>
            <input type="number" name="odometerReading" value={form.odometerReading} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label>Next Service Date</label>
            <input type="date" name="nextServiceDate" value={form.nextServiceDate} onChange={handleChange} />
          </div>

          <div className="form-group form-full-width">
            <label>Remarks</label>
            <textarea name="remarks" value={form.remarks} onChange={handleChange} />
          </div>
        </div>

        <div className="form-actions">
          <button type="button" className="btn-secondary" onClick={() => navigate('/services')}>Cancel</button>
          <button type="submit" className="btn-primary">Update Service Record</button>
        </div>
      </form>
    </div>
  );
}

export default EditService;