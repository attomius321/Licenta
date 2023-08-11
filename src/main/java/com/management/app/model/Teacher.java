package com.management.app.model;

import com.management.app.security.entities.User;
import jakarta.persistence.*;
import lombok.Getter;

import java.util.*;

@Entity
@Table
public class Teacher {
    @Id
    @GeneratedValue(
            strategy = GenerationType.UUID
    )
    private UUID id;

    @Getter
    private String firstName;

    @Getter
    private String lastName;

    @ManyToOne
    @JoinColumn(name = "university_id")
    private University university;

    @OneToOne
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToMany(cascade = {CascadeType.PERSIST, CascadeType.MERGE})
    @JoinTable(name = "teacher_course",
            joinColumns = @JoinColumn(name = "teacher_id"),
            inverseJoinColumns = @JoinColumn(name = "course_id")
    )
    private Set<Course> courses = new HashSet<>();

    public Teacher() {

    }

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public University getUniversity() {
        return university;
    }

    public void setUniversity(University university) {
        this.university = university;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Set<Course> getCourses() {
        return new HashSet(courses);
    }

    public void addCourse(Course course) {
        if (courses.contains(course))
            return;

        courses.add(course);
    }

    public void removeCourse(Course course) {
        if (!courses.contains(course))
            return;

        courses.remove(course);
    }

}
