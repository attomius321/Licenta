package com.management.app.DTOs;

import com.management.app.model.Teacher;

import java.util.Set;
import java.util.UUID;
import java.util.stream.Collectors;

public class TeacherDTO {
    private String id;
    private String firstName;
    private String lastName;
    private Set<UniversityDTO> universities;
    private Set<CourseDTO> courses;
    private String email;

    public TeacherDTO(String id, String firstName, String lastName, Set<UniversityDTO> universities, Set<CourseDTO> courses,  String email) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.universities = universities;
        this.courses = courses;
        this.email = email;
    }

    public TeacherDTO(Teacher teacher) {
        this.id = teacher.getId().toString();
        this.firstName = teacher.getFirstName();
        this.lastName = teacher.getLastName();
        this.universities = teacher.getUniversities().stream().map(university -> new UniversityDTO(university)).collect(Collectors.toSet());
        this.courses = teacher.getCourses().stream().map(course -> new CourseDTO(course)).collect(Collectors.toSet());
        this.email = teacher.getUser().getEmail();
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

    public Set<UniversityDTO> getUniversities() {
        return universities;
    }

    public void setUniversities(Set<UniversityDTO> universities) {
        this.universities = universities;
    }

    public Set<CourseDTO> getCourses() {
        return courses;
    }

    public void setCourses(Set<CourseDTO> courses) {
        this.courses = courses;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
