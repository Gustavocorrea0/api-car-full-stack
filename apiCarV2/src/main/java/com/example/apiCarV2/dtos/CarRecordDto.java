package com.example.apiCarV2.dtos;

import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

import java.math.BigDecimal;

    public record CarRecordDto(@NotNull @NotBlank String nameCar, @NotNull @NotBlank String brandCar,
                           @NotNull @Min(value = 1900) @Max(value = 2025) Integer yearCar, @NotNull Integer powerCar,
                           @NotNull @NotBlank String imgCar, @NotNull BigDecimal valueCar) {
}
