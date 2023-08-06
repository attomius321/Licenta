package com.management.app.model;

import jakarta.persistence.*;

import java.util.HashSet;
import java.util.Set;
import java.util.UUID;

@Entity
@Table
public class CourseSchedule {
    @Id
    @GeneratedValue(
            strategy = GenerationType.UUID
    )
    private UUID id;

    private Integer dayOfWeek;
    private Integer startsAt;

    public CourseSchedule() { }

    public CourseSchedule(UUID id, Integer dayOfWeek, Integer hours) {
        this.id = id;
        this.dayOfWeek = dayOfWeek;
        this.startsAt = hours;
    }

    public CourseSchedule(Integer dayOfWeek, Integer startsAt) {
        this.dayOfWeek = dayOfWeek;
        this.startsAt = startsAt;
    }
    @ManyToMany(mappedBy = "courseSchedules", fetch = FetchType.LAZY)
    private Set<Student> students = new HashSet<>();

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public Integer getDayOfWeek() {
        return dayOfWeek;
    }

    public void setDayOfWeek(Integer dayOfWeek) {
        this.dayOfWeek = dayOfWeek;
    }

    public Integer getHours() {
        return startsAt;
    }

    public void setHours(Integer hours) {
        this.startsAt = hours;
    }

    public Set<Student> getStudents() {
        return new HashSet<Student>(students);
    }

    public void addStudent(Student student) {
        if (students.contains(student))
            return;

        students.add(student);
    }

    public void removeStudent(Student student) {
        if (!students.contains(student))
            return;

        students.remove(student);
    }
}
