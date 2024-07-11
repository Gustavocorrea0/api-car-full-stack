package com.example.apiCarV2.controllers;

import com.example.apiCarV2.dtos.CarRecordDto;
import com.example.apiCarV2.models.CarModel;
import com.example.apiCarV2.repositories.CarRepository;
import jakarta.validation.Valid;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.linkTo;
import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.methodOn;

@RestController
//@RequestMapping("cars")
public class CarController {
    @Autowired
    CarRepository carRepository;

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping("/add-car")
    public ResponseEntity<CarModel> saveNewCar(@RequestBody @Valid CarRecordDto carRecordDto){
        var carModel = new CarModel();
        BeanUtils.copyProperties(carRecordDto, carModel);
        return ResponseEntity.status(HttpStatus.CREATED).body(carRepository.save(carModel));
    }


    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping("/search-cars")
    public ResponseEntity<List<CarModel>> getAllCars(){
        List<CarModel> carList = carRepository.findAll();
        if(!carList.isEmpty()){
            for (CarModel carModel: carList){
                UUID id = carModel.getIdCar();
                carModel.add(linkTo(methodOn(CarController.class).getOneCar(id)).withSelfRel());
            }
        }
        return ResponseEntity.status(HttpStatus.OK).body(carList);
    }

    @GetMapping("/search-one-car/{id}")
    public ResponseEntity<Object> getOneCar(@PathVariable(value = "id") UUID id){
        Optional<CarModel> carSearch = carRepository.findById(id);
        if (carSearch.isEmpty()){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Car not Found");
        }
        carSearch.get().add(linkTo(methodOn(CarController.class).getAllCars()).withRel("Car list"));
        return ResponseEntity.status(HttpStatus.OK).body(carSearch.get());
    }

    @DeleteMapping("/remove-car/{id}")
    @CrossOrigin(origins = "http://localhost:5173")
    public ResponseEntity<Object> deleteCar(@PathVariable(value = "id") UUID id){
        Optional<CarModel> carM = carRepository.findById(id);
        if (carM.isEmpty()){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Car not Found");
        }
        carRepository.delete(carM.get());
        return ResponseEntity.status(HttpStatus.OK).body("Car remove with successfully");
    }

}
