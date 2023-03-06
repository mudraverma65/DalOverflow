package com.dalstackoverflow.backendserver.models;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "user1")
public class Registration {
    @Id
    private int iduser;
    private String username;
    private String password;
    private String email;
    public Registration()
    {
    }
    public Registration(int iduser,String username, String password, String email)
    {
        this.iduser = iduser;
        this.username = username;
        this.password = password;
        this.email = email;
    }

    public int getUserId() {
        return iduser;
    }

    public void setUserId(int iduser) {
        this.iduser = iduser;
    }

    public String getUserName() {
        return username;
    }

    public void setUserName(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmailId() {
        return email;
    }

    public void setEmailId(String email) {
        if (email == null) {
            throw new IllegalArgumentException("Email cannot be null");
        }
        this.email = email;
    }
}
