package org.example.vehicleservicetracker.dto;

import java.util.List;

public class DashboardDTO {

    private long totalVehicles;
    private long totalServices;
    private double totalServiceCost;
    private List<ServiceRecordDTO> upcomingServices;

    public DashboardDTO() {}

    public long getTotalVehicles() { return totalVehicles; }
    public void setTotalVehicles(long totalVehicles) { this.totalVehicles = totalVehicles; }

    public long getTotalServices() { return totalServices; }
    public void setTotalServices(long totalServices) { this.totalServices = totalServices; }

    public double getTotalServiceCost() { return totalServiceCost; }
    public void setTotalServiceCost(double totalServiceCost) { this.totalServiceCost = totalServiceCost; }

    public List<ServiceRecordDTO> getUpcomingServices() { return upcomingServices; }
    public void setUpcomingServices(List<ServiceRecordDTO> upcomingServices) { this.upcomingServices = upcomingServices; }
}