package org.example.vehicleservicetracker.controller;

import org.example.vehicleservicetracker.dto.DashboardDTO;
import org.example.vehicleservicetracker.dto.ServiceRecordDTO;
import org.example.vehicleservicetracker.service.ServiceRecordService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/services")
@CrossOrigin(origins = "*")
public class ServiceRecordController {

    @Autowired
    private ServiceRecordService serviceRecordService;

    @PostMapping
    public ResponseEntity<ServiceRecordDTO> addServiceRecord(@RequestBody ServiceRecordDTO dto) {
        return ResponseEntity.ok(serviceRecordService.addServiceRecord(dto));
    }

    @GetMapping
    public ResponseEntity<List<ServiceRecordDTO>> getAllServiceRecords() {
        return ResponseEntity.ok(serviceRecordService.getAllServiceRecords());
    }

    @GetMapping("/{id}")
    public ResponseEntity<ServiceRecordDTO> getServiceRecordById(@PathVariable Long id) {
        return ResponseEntity.ok(serviceRecordService.getServiceRecordById(id));
    }

    @GetMapping("/vehicle/{vehicleId}")
    public ResponseEntity<List<ServiceRecordDTO>> getServiceRecordsByVehicleId(@PathVariable Long vehicleId) {
        return ResponseEntity.ok(serviceRecordService.getServiceRecordsByVehicleId(vehicleId));
    }

    @PutMapping("/{id}")
    public ResponseEntity<ServiceRecordDTO> updateServiceRecord(@PathVariable Long id, @RequestBody ServiceRecordDTO dto) {
        return ResponseEntity.ok(serviceRecordService.updateServiceRecord(id, dto));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteServiceRecord(@PathVariable Long id) {
        serviceRecordService.deleteServiceRecord(id);
        return ResponseEntity.ok("Service record deleted successfully");
    }

    @GetMapping("/dashboard")
    public ResponseEntity<DashboardDTO> getDashboard() {
        return ResponseEntity.ok(serviceRecordService.getDashboard());
    }
}