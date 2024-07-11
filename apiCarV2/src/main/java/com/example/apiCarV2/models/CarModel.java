package com.example.apiCarV2.models;

import jakarta.persistence.*;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import org.springframework.hateoas.RepresentationModel;

import java.io.Serializable;
import java.math.BigDecimal;
import java.util.UUID;

@Entity
@Table(name = "tb_cars_2")
public class CarModel extends RepresentationModel<CarModel> implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    public UUID idCar;
    public String nameCar;
    public String brandCar;

    @Max(value = 2025)
    @Min(value = 1900)
    public Integer yearCar;

    public Integer powerCar;
    public String imgCar;
    public BigDecimal valueCar;

    public UUID getIdCar() {
        return idCar;
    }

    public void setIdCar(UUID idCar) {
        this.idCar = idCar;
    }

    public String getNameCar() {
        return nameCar;
    }

    public void setNameCar(String nameCar) {
        this.nameCar = nameCar;
    }

    public String getBrandCar() {
        return brandCar;
    }

    public void setBrandCar(String brandCar) {
        this.brandCar = brandCar;
    }

    public @Max(value = 2025) @Min(value = 1900) Integer getYearCar() {
        return yearCar;
    }

    public void setYearCar(@Max(value = 2025) @Min(value = 1900) Integer yearCar) {
        this.yearCar = yearCar;
    }

    public Integer getPowerCar() {
        return powerCar;
    }

    public void setPowerCar(Integer powerCar) {
        this.powerCar = powerCar;
    }

    public String getImgCar() {
        return imgCar;
    }

    public void setImgCar(String imgCar) {
        this.imgCar = imgCar;
    }

    public BigDecimal getValueCar() {
        return valueCar;
    }

    public void setValueCar(BigDecimal valueCar) {
        this.valueCar = valueCar;
    }
}
