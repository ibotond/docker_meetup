package hu.minero.backend.controller;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class ApiController {

    @GetMapping("/hello")
    String helloWorld(){
        return "Hello World!";
    }
}
