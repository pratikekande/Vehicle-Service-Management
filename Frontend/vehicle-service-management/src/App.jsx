import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import VehicleList from './pages/VehicleList';
import AddVehicle from './pages/AddVehicle';
import EditVehicle from './pages/EditVehicle';
import ServiceHistory from './pages/ServiceHistory';
import AddService from './pages/AddService';
import EditService from './pages/EditService';
import './styles/App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/vehicles" element={<VehicleList />} />
          <Route path="/vehicles/add" element={<AddVehicle />} />
          <Route path="/vehicles/edit/:id" element={<EditVehicle />} />
          <Route path="/services" element={<ServiceHistory />} />
          <Route path="/services/add" element={<AddService />} />
          <Route path="/services/edit/:id" element={<EditService />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;