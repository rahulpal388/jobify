package com.jobify.backend.utils;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class DbConnection {
    private static final String url = "jdbc:mysql://localhost:3306/jobify";
    private static final String user = "root";
    private static final String password = "password";

    public static Connection getDBConnection() throws SQLException {
        return DriverManager.getConnection(url, user, password);
    }

}
