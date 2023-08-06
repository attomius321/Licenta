package com.management.app.model;

import jakarta.persistence.*;

import java.util.*;

@Entity
@Table
public class Student {
    @Id
    @GeneratedValue(
            strategy = GenerationType.UUID
    )
    private UUID id;
    private String firstName;
    private String lastName;
    private Integer year;
    private String faculty;

    @OneToOne
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToMany(cascade = {CascadeType.PERSIST, CascadeType.MERGE})
    @JoinTable(name = "student_course_schedule",
            joinColumns = @JoinColumn(name = "student_id"),
            inverseJoinColumns = @JoinColumn(name = "course_schedule_id")
    )
    private Set<CourseSchedule> courseSchedules = new HashSet<>();

    public Student() { }

    public Student(UUID id, String firstName, String lastName, Integer year, String faculty) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.year = year;
        this.faculty = faculty;
    }

    public Student(String firstName, String lastName, Integer year, String faculty) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.year = year;
        this.faculty = faculty;
    }

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
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

    public Set<CourseSchedule> getCourseSchedules() {
        return new HashSet(courseSchedules);
    }

    public void addCourseSchedule(CourseSchedule courseSchedule) {
        if (courseSchedules.contains(courseSchedule))
            return;

        courseSchedules.add(courseSchedule);
    }

    public void removeCourseSchedule(CourseSchedule courseSchedule) {
        if (!courseSchedules.contains(courseSchedule))
            return;

        courseSchedules.remove(courseSchedule);
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
