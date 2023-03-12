package com.dalstackoverflow.backendserver.models;

public class LoginRequest {
    private String userName;
    private String password;

    public String getUsername() {
        return userName;
    }

    public void setUsername(String userName) {
        this.userName = userName;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
    @Override
    public String toString() {
        return "LoginRequest{" +
                "username='" + userName + '\'' +
                ", password='" + password + '\'' +
                '}';
    }
}
