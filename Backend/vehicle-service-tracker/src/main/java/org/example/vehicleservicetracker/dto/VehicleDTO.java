package org.example.vehicleservicetracker.dto;

public class VehicleDTO {

    private Long id;
    private String ownerName;
    private String vehicleNumber;
    private String brand;
    private String model;
    private String fuelType;
    private Integer purchaseYear;

    public VehicleDTO() {}

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
}