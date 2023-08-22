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

    @ManyToMany
    @JoinTable(name = "teacher_universities",
            joinColumns = @JoinColumn(name = "teacher_id"),
            inverseJoinColumns = @JoinColumn(name = "university_id")
    )
    private Set<University> universities = new HashSet<>();

    @OneToOne
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToMany(cascade = {CascadeType.PERSIST, CascadeType.MERGE})
    @JoinTable(name = "teacher_course",
            joinColumns = @JoinColumn(name = "teacher_id"),
            inverseJoinColumns = @JoinColumn(name = "course_id")
    )
    private Set<Course> courses = new HashSet<>();

    public Teacher() { }

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

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Set<University> getUniversities() {
        return new HashSet(universities);
    }

    public void addUniversity(University university) {
        if (universities.contains(university))
            return;

        universities.add(university);
    }

    public void removeUniversity(University university) {
        if (!universities.contains(university))
            return;

        universities.remove(university);
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
