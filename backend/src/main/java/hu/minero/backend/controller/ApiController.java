package hu.minero.backend.controller;

import hu.minero.backend.dto.AnimalDTO;
import hu.minero.backend.model.Animal;
import hu.minero.backend.repository.AnimalRepository;
import jakarta.websocket.server.PathParam;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class ApiController {

    @Autowired
    AnimalRepository animalRepository;

    @GetMapping("/hello")
    String helloWorld(){
        return "Hello World!";
    }

    @GetMapping("/getAnimals")
    List<Animal> getAnimals(){
        return animalRepository.findAll();
    }

    @PostMapping("/addAnimal")
    Animal addAnimal(@RequestBody AnimalDTO animalDTO){
        Animal animal = new Animal(animalDTO.getName(),animalDTO.getNumberOfLegs());
        animalRepository.save(animal);
        return animal;
    }

    @DeleteMapping("/deleteAnimal/{id}")
    boolean deleteAnimal(@PathVariable Long id){
        animalRepository.deleteById(id);
        return true;
    }
}
