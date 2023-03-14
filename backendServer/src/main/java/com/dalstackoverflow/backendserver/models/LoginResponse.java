package com.dalstackoverflow.backendserver.models;

public class LoginResponse {
    private String message;
    private Integer userId;

    public LoginResponse() {
    }

    public LoginResponse(String message, Integer userId) {
        this.message = message;
        this.userId = userId;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    @Override
    public String toString() {
        return "LoginResponse{" +
                "message='" + message + '\'' +
                ", userId=" + userId +
                '}';
    }
}
