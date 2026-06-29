package org.example.vehicleservicetracker.controller;

import org.example.vehicleservicetracker.dto.VehicleDTO;
import org.example.vehicleservicetracker.service.VehicleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/vehicles")
@CrossOrigin(origins = "*")
public class VehicleController {

    @Autowired
    private VehicleService vehicleService;

    @PostMapping
    public ResponseEntity<VehicleDTO> addVehicle(@RequestBody VehicleDTO dto) {
        return ResponseEntity.ok(vehicleService.addVehicle(dto));
    }

    @GetMapping
    public ResponseEntity<List<VehicleDTO>> getAllVehicles() {
        return ResponseEntity.ok(vehicleService.getAllVehicles());
    }

    @GetMapping("/{id}")
    public ResponseEntity<VehicleDTO> getVehicleById(@PathVariable Long id) {
        return ResponseEntity.ok(vehicleService.getVehicleById(id));
    }

    @PutMapping("/{id}")
    public ResponseEntity<VehicleDTO> updateVehicle(@PathVariable Long id, @RequestBody VehicleDTO dto) {
        return ResponseEntity.ok(vehicleService.updateVehicle(id, dto));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteVehicle(@PathVariable Long id) {
        vehicleService.deleteVehicle(id);
        return ResponseEntity.ok("Vehicle deleted successfully");
    }

    @GetMapping("/search/owner")
    public ResponseEntity<List<VehicleDTO>> searchByOwner(@RequestParam String ownerName) {
        return ResponseEntity.ok(vehicleService.searchByOwner(ownerName));
    }

    @GetMapping("/search/vehicle-number")
    public ResponseEntity<List<VehicleDTO>> searchByVehicleNumber(@RequestParam String vehicleNumber) {
        return ResponseEntity.ok(vehicleService.searchByVehicleNumber(vehicleNumber));
    }

    @GetMapping("/search/brand")
    public ResponseEntity<List<VehicleDTO>> searchByBrand(@RequestParam String brand) {
        return ResponseEntity.ok(vehicleService.searchByBrand(brand));
    }
}