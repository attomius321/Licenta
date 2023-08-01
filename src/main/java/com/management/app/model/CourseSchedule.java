package com.management.app.model;

import jakarta.persistence.*;

import java.util.HashSet;
import java.util.Set;

@Entity
@Table
public class CourseSchedule {
    @Id
    @SequenceGenerator(
            name = "course_schedule_sequence",
            sequenceName = "course_schedule_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "course_schedule_sequence"
    )
    private Long id;

    @ManyToOne
    @JoinColumn(name = "course_id")
    private Course course;

    @ManyToMany(mappedBy = "courseSchedules", fetch = FetchType.LAZY)
    private Set<Student> students = new HashSet<>();

    private int dayOfWeek;
    private int hourInterval;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Course getCourse() {
        return course;
    }

    public void setCourse(Course course) {
        this.course = course;
    }

    public int getDayOfWeek() {
        return dayOfWeek;
    }

    public void setDayOfWeek(int dayOfWeek) {
        this.dayOfWeek = dayOfWeek;
    }

    public int getHourInterval() {
        return hourInterval;
    }

    public void setHourInterval(int hourInterval) {
        this.hourInterval = hourInterval;
    }

    @Override
    public String toString() {
        return "CourseSchedule{" +
                "id=" + id +
                ", course=" + course +
                ", dayOfWeek=" + dayOfWeek +
                ", hourInterval=" + hourInterval +
                '}';
    }
}
