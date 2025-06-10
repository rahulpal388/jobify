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

import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

@RestController
public class RegisterUser {
    @Autowired
    private UserRegisterDAO registerDAO;
    @Autowired
    private User userDAO;

    @PostMapping("/user/register")
    public ResponseEntity<Map<String, Object>> registerUsers(@RequestBody RegisterUserModel user) {
        Map<String, Object> response = new HashMap<>();
        try {
            registerDAO.registerUser(user);
            // token
            String accessToken = UUID.randomUUID().toString();
            response.put("message", "User registered successfully");
            response.put("accessToken", accessToken);
            return ResponseEntity.status(HttpStatus.CREATED).body(response);
        } catch (Exception e) {
            response.put("message", "Server error: " + e.getMessage());
            response.put("accessToken", null);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
        }
    }

    @PostMapping("/user/login")
    public ResponseEntity<Map<String, Object>> loginUser(@RequestBody RegisterUserModel user) {
        Map<String, Object> response = new HashMap<>();
        try {
            RegisterUserModel existingUser = userDAO.getUser(user);
            if (existingUser != null) {
                if (!existingUser.getPassword().equals(user.getPassword())) {
                    response.put("message", "Invalid email or password");
                    response.put("accessToken", null);
                    return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(response);
                } else {
                    // token
                    String accessToken = UUID.randomUUID().toString();
                    response.put("message", "Login successful for user: " + existingUser.getUsername());
                    response.put("accessToken", accessToken);
                    return ResponseEntity.ok(response);
                }
            } else {
                response.put("message", "User not found");
                response.put("accessToken", null);
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
            }
        } catch (Exception e) {
            response.put("message", "Server error: " + e.getMessage());
            response.put("accessToken", null);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
        }
    }

}
