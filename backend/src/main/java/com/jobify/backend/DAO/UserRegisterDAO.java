package com.jobify.backend.DAO;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;

import org.springframework.stereotype.Repository;

import com.jobify.backend.interfaces.RegisterUserInterface;
import com.jobify.backend.models.RegisterUserModel;
import com.jobify.backend.utils.DbConnection;

@Repository
public class UserRegisterDAO implements RegisterUserInterface {

    public void registerUser(RegisterUserModel user) {
        String sql = "INSERT INTO user (id,username, email, password,user_type) VALUES (?,?,?,?,?)";

        try (Connection conn = DbConnection.getDBConnection();
                PreparedStatement pstmt = conn.prepareStatement(sql)) {
            pstmt.setInt(1, user.getId());
            pstmt.setString(2, user.getUsername());
            pstmt.setString(3, user.getEmail());
            pstmt.setString(4, user.getPassword());
            pstmt.setString(5, user.getUserType());
            pstmt.executeUpdate();
        } catch (SQLException e) {
            System.err.println("SQL error during user registration: " + e.getMessage());
            e.printStackTrace();
        } catch (Exception ex) {
            System.err.println("Unexpected error during user registration: " + ex.getMessage());
            ex.printStackTrace();
        }
    }

}

/*

 */