package com.management.app.model;

import jakarta.persistence.*;

import java.util.*;

@Entity
@Table
public class Course {
    @Id
    @GeneratedValue(
            strategy = GenerationType.UUID
    )
    private UUID id;

    private String name;

    @ManyToMany(mappedBy = "courses", fetch = FetchType.LAZY)
    private Set<Teacher> teachers = new HashSet<>();

    @OneToMany(mappedBy="course")
    private Set<CourseSchedule> courseSchedules;

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

    public Set<Teacher> getTeachers() {
        return new HashSet<>(teachers);
    }

    public void addTeacher(Teacher teacher) {
        if (teachers.contains(teacher))
            return;

        teachers.add(teacher);
    }

    public void removeTeacher(Teacher teacher) {
        if (!teachers.contains(teacher))
            return;

        teachers.remove(teacher);
    }

    public Set<CourseSchedule> getCourseSchedules() { return this.courseSchedules; }

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
