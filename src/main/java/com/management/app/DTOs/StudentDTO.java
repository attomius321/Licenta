package com.management.app.DTOs;

import java.util.UUID;

public class StudentDTO {
    private String id;
    private String firstName;
    private String lastName;
    private Integer year;
    private String faculty;

    public StudentDTO(UUID id, String firstName, String lastName, Integer year, String faculty) {
        this.id = id.toString();
        this.firstName = firstName;
        this.lastName = lastName;
        this.year = year;
        this.faculty = faculty;
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

    public String getFaculty() {
        return faculty;
    }

    public void setFaculty(String faculty) {
        this.faculty = faculty;
    }
}
