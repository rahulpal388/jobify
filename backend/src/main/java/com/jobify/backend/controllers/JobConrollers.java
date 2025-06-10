package com.jobify.backend.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.jobify.backend.DAO.UploadJobsDAO;
import com.jobify.backend.models.JobUploadModel;

@RestController
public class JobConrollers {

    @Autowired
    private UploadJobsDAO jobUploadDAO;

    @PostMapping("/job/upload")
    public String uploadJob(@RequestBody JobUploadModel job) {
        try {
            jobUploadDAO.uploadJob(job);
            return "Job uploaded successfully";
        } catch (Exception e) {
            return "Server error: " + e.getMessage();
        }
    }

    @GetMapping("/job/get/{id}")
    public String getJob(@PathVariable Long id) {
        try {
            JobUploadModel job = jobUploadDAO.getJob(id);
            if (job != null) {
                return "Job Title: " + job.getJobTitle() + ", Description: " + job.getJobDescription() + ", Salary: "
                        + job.getSalary();
            } else {
                return "Job not found";
            }
        } catch (Exception e) {
            return "Server error: " + e.getMessage();
        }
    }

}
