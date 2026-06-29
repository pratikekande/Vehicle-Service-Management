import axios from 'axios';

const BASE_URL = 'http://localhost:8080/api';

// Vehicle APIs
export const getAllVehicles = () => axios.get(`${BASE_URL}/vehicles`);
export const getVehicleById = (id) => axios.get(`${BASE_URL}/vehicles/${id}`);
export const addVehicle = (data) => axios.post(`${BASE_URL}/vehicles`, data);
export const updateVehicle = (id, data) => axios.put(`${BASE_URL}/vehicles/${id}`, data);
export const deleteVehicle = (id) => axios.delete(`${BASE_URL}/vehicles/${id}`);
export const searchByOwner = (name) => axios.get(`${BASE_URL}/vehicles/search/owner?ownerName=${name}`);
export const searchByVehicleNumber = (number) => axios.get(`${BASE_URL}/vehicles/search/vehicle-number?vehicleNumber=${number}`);

// Service Record APIs
export const getAllServices = () => axios.get(`${BASE_URL}/services`);
export const getServiceById = (id) => axios.get(`${BASE_URL}/services/${id}`);
export const addService = (data) => axios.post(`${BASE_URL}/services`, data);
export const updateService = (id, data) => axios.put(`${BASE_URL}/services/${id}`, data);
export const deleteService = (id) => axios.delete(`${BASE_URL}/services/${id}`);
export const getServicesByVehicleId = (vehicleId) => axios.get(`${BASE_URL}/services/vehicle/${vehicleId}`);

// Dashboard API
export const getDashboard = () => axios.get(`${BASE_URL}/services/dashboard`);