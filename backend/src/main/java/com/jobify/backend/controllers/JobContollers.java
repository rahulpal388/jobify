package com.jobify.backend.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.jobify.backend.DAO.UploadJobsDAO;
import com.jobify.backend.models.JobUploadModel;

@RestController
public class JobContollers {

    @Autowired
    private UploadJobsDAO jobUploadDAO;

    @PostMapping("/job/upload")
    public ResponseEntity<String> uploadJob(@RequestBody JobUploadModel job) {
        try {
            jobUploadDAO.uploadJob(job);
            return ResponseEntity.status(HttpStatus.OK).body("Job uploaded successfully");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Server error: " + e.getMessage());
        }
    }

    @GetMapping("/job/get/{id}")
    public ResponseEntity<String> getJob(@PathVariable Long id) {
        try {
            JobUploadModel job = jobUploadDAO.getJob(id);
            if (job != null) {
                String response = "Job Title: " + job.getJobTitle() + ", Description: " + job.getJobDescription()
                        + ", Salary: " + job.getSalary();
                return ResponseEntity.ok(response);
            } else {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Job not found");
            }
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Server error: " + e.getMessage());
        }
    }

}
