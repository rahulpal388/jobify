package com.jobify.backend.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.jobify.backend.DAO.User;
import com.jobify.backend.DAO.UserRegisterDAO;
import com.jobify.backend.models.RegisterUserModel;

@RestController
public class RegisterUser {
    @Autowired
    private UserRegisterDAO registerDAO;
    @Autowired
    private User userDAO;

    @PostMapping("/user/register")
    public ResponseEntity<String> registerUsers(@RequestBody RegisterUserModel user) {
        try {
            registerDAO.registerUser(user);
            return ResponseEntity.status(HttpStatus.CREATED).body("User registered successfully");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Server error: " + e.getMessage());
        }
    }

    @PostMapping("/user/login")
    public ResponseEntity<String> loginUser(@RequestBody RegisterUserModel user) {
        try {
            RegisterUserModel existingUser = userDAO.getUser(user);
            if (existingUser != null) {
                if (!existingUser.getPassword().equals(user.getPassword())) {
                    return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid email or password");
                } else {
                    return ResponseEntity.ok("Login successful for user: " + existingUser.getUsername());
                }
            } else {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found");
            }
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Server error: " + e.getMessage());
        }
    }

}
