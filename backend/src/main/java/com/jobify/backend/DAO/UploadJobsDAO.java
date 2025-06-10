package com.jobify.backend.DAO;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.stereotype.Repository;

import com.jobify.backend.models.JobUploadModel;
import com.jobify.backend.utils.DbConnection;

@Repository
public class UploadJobsDAO {

    public void uploadJob(JobUploadModel job) {

        String sql = "INSERT INTO JOBS (id, jobTitle, jobDescription, salary) VALUES (?, ?, ?, ?)";
        try (Connection conn = DbConnection.getDBConnection(); PreparedStatement pstmt = conn.prepareStatement(sql)) {
            pstmt.setLong(1, job.getId());
            pstmt.setString(2, job.getJobTitle());
            pstmt.setString(3, job.getJobDescription());
            pstmt.setInt(4, job.getSalary());

            pstmt.executeUpdate();
            pstmt.close();
            conn.close();
        } catch (SQLException e) {
            e.printStackTrace();
        }

    }

    public JobUploadModel getJob(Long id) {
        try (Connection conn = DbConnection.getDBConnection();
                PreparedStatement pstmt = conn.prepareStatement("SELECT * FROM JOBS WHERE id = ?")) {
            pstmt.setLong(1, id);
            ResultSet rs = pstmt.executeQuery();
            if (rs.next()) {
                JobUploadModel job = new JobUploadModel();
                job.setId(rs.getLong("id"));
                job.setJobTitle(rs.getString("jobTitle"));
                job.setJobDescription(rs.getString("jobDescription"));
                job.setSalary(rs.getInt("salary"));
                return job;
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return null;
    }
}