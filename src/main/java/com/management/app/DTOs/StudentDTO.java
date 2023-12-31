package com.management.app.DTOs;

import com.management.app.model.Student;

import java.util.UUID;

public class StudentDTO extends BaseEntityDTO {
    private String id;
    private String firstName;
    private String lastName;
    private Integer year;
    private String universityName;
    private String email;

    public StudentDTO(UUID id, String firstName, String lastName, Integer year, String universityName, String email) {
        this.id = id.toString();
        this.firstName = firstName;
        this.lastName = lastName;
        this.year = year;
        this.universityName = universityName;
        this.email = email;
    }

    public StudentDTO(Student student) {
        this.id = student.getId().toString();
        this.firstName = student.getFirstName();
        this.lastName = student.getLastName();
        this.year = student.getYear();
        this.universityName = student.getUniversity().getName();
        this.email = student.getUser().getEmail();
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

    public Integer getYear() {
        return year;
    }

    public void setYear(Integer year) {
        this.year = year;
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
