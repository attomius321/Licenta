package com.management.app.model;

import jakarta.persistence.*;
import org.hibernate.annotations.Cascade;

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
    private String startsAtHour;
    private String endsAtHour;

    private Integer maxAllocation;

    @OneToMany(mappedBy = "courseSchedule")
    private Set<Student> studentSet = new HashSet<>();

    @ManyToOne
    @JoinColumn(name="course_id")
    private Course course;

    @ManyToOne
    @Cascade(org.hibernate.annotations.CascadeType.SAVE_UPDATE)
    @JoinColumn(name="course_location_id")
    private CourseLocation courseLocation;

    @ManyToOne
    @JoinColumn(name="teacher_id")
    private Teacher teacher;

    public CourseSchedule() { }

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

    public String getStartsAt() {
        return startsAtHour;
    }

    public void setStartsAt(String startsAt) {
        this.startsAtHour = startsAt;
    }

    public String getEndsAt() {
        return endsAtHour;
    }

    public void setEndsAt(String endsAt) {
        this.endsAtHour = endsAt;
    }

    public Integer getMaxAllocation() {
        return maxAllocation;
    }

    public void setMaxAllocation(Integer maxAllocation) {
        this.maxAllocation = maxAllocation;
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

    public Teacher getTeacher() {
        return teacher;
    }

    public void setTeacher(Teacher teacher) {
        this.teacher = teacher;
    }

    public Set<Student> getStudents() {
        return studentSet;
    }

    public void setStudents(Set<Student> studentSet) {
        this.studentSet = studentSet;
    }
}
