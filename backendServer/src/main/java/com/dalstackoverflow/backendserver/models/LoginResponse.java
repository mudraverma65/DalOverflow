package com.dalstackoverflow.backendserver.models;
/**
 * @author Ritva Katrodiya
 * This is the model class for LoginResponse .
 */
public class LoginResponse {
    private String message;
    private Integer userId;

    private String userName;

    public LoginResponse() {
    }

    public LoginResponse(String message, Integer userId, String userName) {
        this.message = message;
        this.userId = userId;
        this.userName = userName;
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

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    @Override
    public String toString() {
        return "LoginResponse{" +
                "message='" + message + '\'' +
                ", userId=" + userId +
                ", userName=" + userName +
                '}';
    }
}
