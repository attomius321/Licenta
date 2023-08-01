package com.management.app.model;

import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
@Table
public class Student {
    @Id
    @SequenceGenerator(
            name = "student_sequence",
            sequenceName = "student_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "student_sequence"
    )
    private Long id;
    private String firstName;
    private String lastName;
    private String email;
    private Integer year;
    private String faculty;

    @ManyToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinTable(name = "student_courseSchedule",
        joinColumns = {
            @JoinColumn(name = "student_id", referencedColumnName = "id")
        },
        inverseJoinColumns = {
            @JoinColumn(name = "course_schedule_id", referencedColumnName = "id")
        }
    )
    private Set<CourseSchedule> courseSchedules = new HashSet<>();

    @ManyToOne
    @JoinColumn(name = "student_id")
    private CourseEnrollment courseEnrollment;

    public Student() { }

    public Student(Long id, String firstName, String lastName, String email, Integer year, String faculty) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.year = year;
        this.faculty = faculty;
    }

    public Student(String firstName, String lastName, String email, Integer year, String faculty) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.year = year;
        this.faculty = faculty;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
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

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
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

    @Override
    public String toString() {
        return "Student{" +
                "id=" + id +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", email='" + email + '\'' +
                ", year=" + year +
                ", faculty='" + faculty + '\'' +
                '}';
    }
}
