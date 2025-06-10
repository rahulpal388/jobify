package com.jobify.backend.controllers;

import org.springframework.beans.factory.annotation.Autowired;
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
    public String registerUsers(@RequestBody RegisterUserModel user) {

        try {
            registerDAO.registerUser(user);
            return "User register successfully";
        } catch (Exception e) {

            return "server error" + e.getMessage();
        }
    }

    @PostMapping("/user/login")
    public String loginUser(@RequestBody RegisterUserModel user) {
        try {
            RegisterUserModel existingUser = userDAO.getUser(user);
            if (existingUser != null) {
                if (!existingUser.getPassword().equals(user.getPassword())) {
                    return "Invalid email or password";
                } else {

                    return "Login successful for user: " + existingUser.getUsername();
                }
            } else {
                return "User not found";
            }
        } catch (Exception e) {
            return "Server error: " + e.getMessage();
        }
    }

}
