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

    @OneToMany(mappedBy="courseLocation")
    private Set<CourseSchedule> courseSchedules;

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public Set<CourseSchedule> getCourseSchedules() {
        return new HashSet<>(courseSchedules);
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
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
