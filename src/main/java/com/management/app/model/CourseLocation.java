package com.management.app.model;

import jakarta.persistence.*;

import java.util.HashSet;
import java.util.Set;
import java.util.UUID;

@Entity
@Table
public class CourseLocation {
    @Id
    @GeneratedValue(
            strategy = GenerationType.UUID
    )
    private UUID id;

    private String name;

    private String address;

    @OneToMany(mappedBy="courseLocation", orphanRemoval = true, cascade = CascadeType.ALL)
    private Set<CourseSchedule> courseSchedules = new HashSet<>();

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public Set<CourseSchedule> getCourseSchedules() {
        return new HashSet<>(courseSchedules);
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
}
