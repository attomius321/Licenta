package com.management.app.model;

import jakarta.persistence.*;

import java.util.Date;
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
    private Integer startsAtHour;
    private Integer endsAtHour;

    public CourseSchedule() { }

    @ManyToMany(mappedBy = "courseSchedules", fetch = FetchType.LAZY)
    private Set<Student> students = new HashSet<>();

    @ManyToOne
    @JoinColumn(name="course_id")
    private Course course;

    @ManyToOne
    @JoinColumn(name="course_location_id")
    private CourseLocation courseLocation;

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

    public Integer getStartsAt() {
        return startsAtHour;
    }

    public void setStartsAt(Integer startsAt) {
        this.startsAtHour = startsAt;
    }

    public Integer getEndsAt() {
        return endsAtHour;
    }

    public void setEndsAt(Integer endsAt) {
        this.endsAtHour = endsAt;
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

    public Course getCourse() {
        return course;
    }

    public void setCourse(Course course) {
        this.course = course;
    }

    public CourseLocation getCourseLocation() {
        return courseLocation;
    }

    public void setCourseLocation(CourseLocation courseLocation) {
        this.courseLocation = courseLocation;
    }
}
