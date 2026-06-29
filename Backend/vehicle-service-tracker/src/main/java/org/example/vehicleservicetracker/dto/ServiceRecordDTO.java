package org.example.vehicleservicetracker.dto;

import java.time.LocalDate;

public class ServiceRecordDTO {

    private Long id;
    private Long vehicleId;
    private String vehicleNumber;
    private LocalDate serviceDate;
    private String serviceType;
    private String serviceCenter;
    private Double cost;
    private Integer odometerReading;
    private LocalDate nextServiceDate;
    private String remarks;

    public ServiceRecordDTO() {}

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public Long getVehicleId() { return vehicleId; }
    public void setVehicleId(Long vehicleId) { this.vehicleId = vehicleId; }

    public String getVehicleNumber() { return vehicleNumber; }
    public void setVehicleNumber(String vehicleNumber) { this.vehicleNumber = vehicleNumber; }

    public LocalDate getServiceDate() { return serviceDate; }
    public void setServiceDate(LocalDate serviceDate) { this.serviceDate = serviceDate; }

    public String getServiceType() { return serviceType; }
    public void setServiceType(String serviceType) { this.serviceType = serviceType; }

    public String getServiceCenter() { return serviceCenter; }
    public void setServiceCenter(String serviceCenter) { this.serviceCenter = serviceCenter; }

    public Double getCost() { return cost; }
    public void setCost(Double cost) { this.cost = cost; }

    public Integer getOdometerReading() { return odometerReading; }
    public void setOdometerReading(Integer odometerReading) { this.odometerReading = odometerReading; }

    public LocalDate getNextServiceDate() { return nextServiceDate; }
    public void setNextServiceDate(LocalDate nextServiceDate) { this.nextServiceDate = nextServiceDate; }

    public String getRemarks() { return remarks; }
    public void setRemarks(String remarks) { this.remarks = remarks; }
}