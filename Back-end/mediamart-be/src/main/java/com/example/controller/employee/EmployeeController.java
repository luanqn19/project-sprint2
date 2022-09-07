package com.example.controller.employee;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
@RequestMapping({ "/employees" })
public class EmployeeController {
    @GetMapping("/greeting")
    public ResponseEntity<String> getGreeting() {
        return new ResponseEntity<>( "Hello there", HttpStatus.OK);
    }
}
