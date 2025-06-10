package com.jobify.backend.DAO;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.stereotype.Repository;

import com.jobify.backend.models.RegisterUserModel;
import com.jobify.backend.utils.DbConnection;

@Repository
public class User {
    public RegisterUserModel getUser(RegisterUserModel user) {

        String sql = "SELECT * FROM USER WHERE email = ? ";

        try (Connection conn = DbConnection.getDBConnection(); PreparedStatement pstmt = conn.prepareStatement(sql);) {

            pstmt.setString(1, user.getEmail());

            ResultSet rs = pstmt.executeQuery();
            if (rs.next()) {
                RegisterUserModel registerUser = new RegisterUserModel();

                registerUser.setEmail(rs.getString("email"));
                registerUser.setId(rs.getInt("id"));
                registerUser.setUsername(rs.getString("username"));
                registerUser.setPassword(rs.getString("password"));
                registerUser.setUserType(rs.getString("userType"));

                return registerUser;

            }

        } catch (SQLException e) {
            System.out.println("error while find the user ");
        }
        return null;
    }
}
