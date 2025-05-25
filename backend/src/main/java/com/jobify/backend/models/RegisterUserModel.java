package com.jobify.backend.models;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class RegisterUserModel {
    @Id
    private int id;
    private String username;
    private String email;
    private String password;

    public String getEmail() {
        return this.email;
    }

    public int getId() {
        return this.id;
    }

    public String getUsername() {
        return this.username;
    }

    public String getPassword() {
        return this.password;
    }

}
