package com.management.app.DTOs;

import java.util.UUID;

public class TeacherDTO {
    private String id;
    private String firstName;
    private String lastName;
    private String universityName;
    private String email;

    public TeacherDTO(UUID id, String firstName, String lastName, String universityName, String email) {
        this.id = id.toString();
        this.firstName = firstName;
        this.lastName = lastName;
        this.universityName = universityName;
        this.email = email;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getUniversityName() {
        return universityName;
    }

    public void setUniversityName(String universityName) {
        this.universityName = universityName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}