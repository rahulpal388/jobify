package com.jobify.backend.models;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

@Entity
public class JobUploadModel {

    @Id
    private Long id;

    @NotBlank(message = "Job title is required")
    @Size(min = 3, max = 100, message = "Job title must be between 3 and 100 characters")
    private String jobTitle;

    @NotBlank(message = "Job description is required")
    @Size(min = 10, max = 1000, message = "Job description must be between 10 and 1000 characters")
    private String jobDescription;

    @NotNull(message = "Salary is required")
    @Min(value = 0, message = "Salary must be a positive number")
    private Integer salary;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getJobTitle() {
        return jobTitle;
    }

    public void setJobTitle(String jobTitle) {
        this.jobTitle = jobTitle;
    }

    public String getJobDescription() {
        return jobDescription;
    }

    public void setJobDescription(String jobDescription) {
        this.jobDescription = jobDescription;
    }

    public Integer getSalary() {
        return salary;
    }

    public void setSalary(Integer salary) {
        this.salary = salary;
    }

}
