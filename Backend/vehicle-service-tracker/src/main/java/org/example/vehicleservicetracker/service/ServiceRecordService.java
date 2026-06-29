package org.example.vehicleservicetracker.service;

import org.example.vehicleservicetracker.dto.DashboardDTO;
import org.example.vehicleservicetracker.dto.ServiceRecordDTO;
import org.example.vehicleservicetracker.entity.ServiceRecord;
import org.example.vehicleservicetracker.entity.Vehicle;
import org.example.vehicleservicetracker.exception.ResourceNotFoundException;
import org.example.vehicleservicetracker.repository.ServiceRecordRepository;
import org.example.vehicleservicetracker.repository.VehicleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class ServiceRecordService {

    @Autowired
    private ServiceRecordRepository serviceRecordRepository;

    @Autowired
    private VehicleRepository vehicleRepository;

    // Add Service Record
    public ServiceRecordDTO addServiceRecord(ServiceRecordDTO dto) {
        Vehicle vehicle = vehicleRepository.findById(dto.getVehicleId())
                .orElseThrow(() -> new ResourceNotFoundException("Vehicle not found with id: " + dto.getVehicleId()));

        ServiceRecord record = mapToEntity(dto, vehicle);
        ServiceRecord saved = serviceRecordRepository.save(record);
        return mapToDTO(saved);
    }

    // Get All Service Records
    public List<ServiceRecordDTO> getAllServiceRecords() {
        return serviceRecordRepository.findAll()
                .stream().map(this::mapToDTO).collect(Collectors.toList());
    }

    // Get Service Records By Vehicle Id
    public List<ServiceRecordDTO> getServiceRecordsByVehicleId(Long vehicleId) {
        return serviceRecordRepository.findByVehicleId(vehicleId)
                .stream().map(this::mapToDTO).collect(Collectors.toList());
    }

    // Get Service Record By Id
    public ServiceRecordDTO getServiceRecordById(Long id) {
        ServiceRecord record = serviceRecordRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Service record not found with id: " + id));
        return mapToDTO(record);
    }

    // Update Service Record
    public ServiceRecordDTO updateServiceRecord(Long id, ServiceRecordDTO dto) {
        ServiceRecord record = serviceRecordRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Service record not found with id: " + id));

        record.setServiceDate(dto.getServiceDate());
        record.setServiceType(dto.getServiceType());
        record.setServiceCenter(dto.getServiceCenter());
        record.setCost(dto.getCost());
        record.setOdometerReading(dto.getOdometerReading());
        record.setNextServiceDate(dto.getNextServiceDate());
        record.setRemarks(dto.getRemarks());

        ServiceRecord updated = serviceRecordRepository.save(record);
        return mapToDTO(updated);
    }

    // Delete Service Record
    public void deleteServiceRecord(Long id) {
        ServiceRecord record = serviceRecordRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Service record not found with id: " + id));
        serviceRecordRepository.delete(record);
    }

    // Dashboard
    public DashboardDTO getDashboard() {
        DashboardDTO dashboard = new DashboardDTO();

        dashboard.setTotalVehicles(vehicleRepository.count());
        dashboard.setTotalServices(serviceRecordRepository.count());

        Double totalCost = serviceRecordRepository.getTotalServiceCost();
        dashboard.setTotalServiceCost(totalCost != null ? totalCost : 0.0);

        LocalDate today = LocalDate.now();
        LocalDate thirtyDaysLater = today.plusDays(30);
        List<ServiceRecordDTO> upcoming = serviceRecordRepository
                .findByNextServiceDateBetween(today, thirtyDaysLater)
                .stream().map(this::mapToDTO).collect(Collectors.toList());
        dashboard.setUpcomingServices(upcoming);

        return dashboard;
    }

    // Mappers
    private ServiceRecord mapToEntity(ServiceRecordDTO dto, Vehicle vehicle) {
        ServiceRecord record = new ServiceRecord();
        record.setVehicle(vehicle);
        record.setServiceDate(dto.getServiceDate());
        record.setServiceType(dto.getServiceType());
        record.setServiceCenter(dto.getServiceCenter());
        record.setCost(dto.getCost());
        record.setOdometerReading(dto.getOdometerReading());
        record.setNextServiceDate(dto.getNextServiceDate());
        record.setRemarks(dto.getRemarks());
        return record;
    }

    private ServiceRecordDTO mapToDTO(ServiceRecord record) {
        ServiceRecordDTO dto = new ServiceRecordDTO();
        dto.setId(record.getId());
        dto.setVehicleId(record.getVehicle().getId());
        dto.setVehicleNumber(record.getVehicle().getVehicleNumber());
        dto.setServiceDate(record.getServiceDate());
        dto.setServiceType(record.getServiceType());
        dto.setServiceCenter(record.getServiceCenter());
        dto.setCost(record.getCost());
        dto.setOdometerReading(record.getOdometerReading());
        dto.setNextServiceDate(record.getNextServiceDate());
        dto.setRemarks(record.getRemarks());
        return dto;
    }
}