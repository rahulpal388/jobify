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
        String sql = "INSERT INTO USER (id,username, email, password) " + "VALUES (?,?,?,?)";

        try (Connection conn = DbConnection.getDBConnection(); PreparedStatement pstmt = conn.prepareStatement(sql);) {
            pstmt.setInt(1, user.getId());
            pstmt.setString(2, user.getUsername());
            pstmt.setString(3, user.getEmail());
            pstmt.setString(4, user.getPassword());

            pstmt.executeUpdate();

            pstmt.close();
            conn.close();

        } catch (SQLException e) {
            e.printStackTrace();

        }

    }

}
