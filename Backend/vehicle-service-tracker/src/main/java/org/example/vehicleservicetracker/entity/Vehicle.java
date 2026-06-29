package org.example.vehicleservicetracker.entity;

import jakarta.persistence.*;
import java.util.List;

@Entity
@Table(name = "vehicles")
public class Vehicle {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String ownerName;
    private String vehicleNumber;
    private String brand;
    private String model;
    private String fuelType;
    private Integer purchaseYear;

    @OneToMany(mappedBy = "vehicle", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<ServiceRecord> serviceRecords;

    public Vehicle() {}

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getOwnerName() { return ownerName; }
    public void setOwnerName(String ownerName) { this.ownerName = ownerName; }

    public String getVehicleNumber() { return vehicleNumber; }
    public void setVehicleNumber(String vehicleNumber) { this.vehicleNumber = vehicleNumber; }

    public String getBrand() { return brand; }
    public void setBrand(String brand) { this.brand = brand; }

    public String getModel() { return model; }
    public void setModel(String model) { this.model = model; }

    public String getFuelType() { return fuelType; }
    public void setFuelType(String fuelType) { this.fuelType = fuelType; }

    public Integer getPurchaseYear() { return purchaseYear; }
    public void setPurchaseYear(Integer purchaseYear) { this.purchaseYear = purchaseYear; }

    public List<ServiceRecord> getServiceRecords() { return serviceRecords; }
    public void setServiceRecords(List<ServiceRecord> serviceRecords) { this.serviceRecords = serviceRecords; }
}