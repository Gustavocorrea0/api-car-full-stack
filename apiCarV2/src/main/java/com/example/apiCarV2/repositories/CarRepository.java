package com.example.apiCarV2.repositories;

import com.example.apiCarV2.models.CarModel;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;
import java.util.UUID;

public interface CarRepository extends JpaRepository<CarModel, UUID> {
    Optional<CarModel> findByNameCar(String nameCar);
}
