package org.example.vehicleservicetracker.service;

import org.example.vehicleservicetracker.dto.VehicleDTO;
import org.example.vehicleservicetracker.entity.Vehicle;
import org.example.vehicleservicetracker.exception.ResourceNotFoundException;
import org.example.vehicleservicetracker.repository.VehicleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class VehicleService {

    @Autowired
    private VehicleRepository vehicleRepository;

    // Add Vehicle
    public VehicleDTO addVehicle(VehicleDTO dto) {
        Vehicle vehicle = mapToEntity(dto);
        Vehicle saved = vehicleRepository.save(vehicle);
        return mapToDTO(saved);
    }

    // Get All Vehicles
    public List<VehicleDTO> getAllVehicles() {
        return vehicleRepository.findAll()
                .stream()
                .map(this::mapToDTO)
                .collect(Collectors.toList());
    }

    // Get Vehicle By Id
    public VehicleDTO getVehicleById(Long id) {
        Vehicle vehicle = vehicleRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Vehicle not found with id: " + id));
        return mapToDTO(vehicle);
    }

    // Update Vehicle
    public VehicleDTO updateVehicle(Long id, VehicleDTO dto) {
        Vehicle vehicle = vehicleRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Vehicle not found with id: " + id));

        vehicle.setOwnerName(dto.getOwnerName());
        vehicle.setVehicleNumber(dto.getVehicleNumber());
        vehicle.setBrand(dto.getBrand());
        vehicle.setModel(dto.getModel());
        vehicle.setFuelType(dto.getFuelType());
        vehicle.setPurchaseYear(dto.getPurchaseYear());

        Vehicle updated = vehicleRepository.save(vehicle);
        return mapToDTO(updated);
    }

    // Delete Vehicle
    public void deleteVehicle(Long id) {
        Vehicle vehicle = vehicleRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Vehicle not found with id: " + id));
        vehicleRepository.delete(vehicle);
    }

    // Search
    public List<VehicleDTO> searchByOwner(String ownerName) {
        return vehicleRepository.findByOwnerNameContainingIgnoreCase(ownerName)
                .stream().map(this::mapToDTO).collect(Collectors.toList());
    }

    public List<VehicleDTO> searchByVehicleNumber(String vehicleNumber) {
        return vehicleRepository.findByVehicleNumberContainingIgnoreCase(vehicleNumber)
                .stream().map(this::mapToDTO).collect(Collectors.toList());
    }

    public List<VehicleDTO> searchByBrand(String brand) {
        return vehicleRepository.findByBrandContainingIgnoreCase(brand)
                .stream().map(this::mapToDTO).collect(Collectors.toList());
    }

    // Mappers
    private Vehicle mapToEntity(VehicleDTO dto) {
        Vehicle vehicle = new Vehicle();
        vehicle.setOwnerName(dto.getOwnerName());
        vehicle.setVehicleNumber(dto.getVehicleNumber());
        vehicle.setBrand(dto.getBrand());
        vehicle.setModel(dto.getModel());
        vehicle.setFuelType(dto.getFuelType());
        vehicle.setPurchaseYear(dto.getPurchaseYear());
        return vehicle;
    }

    private VehicleDTO mapToDTO(Vehicle vehicle) {
        VehicleDTO dto = new VehicleDTO();
        dto.setId(vehicle.getId());
        dto.setOwnerName(vehicle.getOwnerName());
        dto.setVehicleNumber(vehicle.getVehicleNumber());
        dto.setBrand(vehicle.getBrand());
        dto.setModel(vehicle.getModel());
        dto.setFuelType(vehicle.getFuelType());
        dto.setPurchaseYear(vehicle.getPurchaseYear());
        return dto;
    }
}