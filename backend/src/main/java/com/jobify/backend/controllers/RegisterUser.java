package com.jobify.backend.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.jobify.backend.DAO.UserRegisterDAO;
import com.jobify.backend.models.RegisterUserModel;

@RestController
public class RegisterUser {
    @Autowired
    private UserRegisterDAO registerDAO;

    @PostMapping("/user/register")
    public String registerUsers(@RequestBody RegisterUserModel user) {

        try {
            registerDAO.registerUser(user);
            return "User register successfully";
        } catch (Exception e) {

            return "server error" + e.getMessage();
        }
    }

}
