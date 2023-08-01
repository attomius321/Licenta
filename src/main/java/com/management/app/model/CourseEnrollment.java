package com.management.app.model;

import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table
public class CourseEnrollment {
    @Id
    @SequenceGenerator(
            name = "course_enrollment_sequence",
            sequenceName = "course_enrollment_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "course_enrollment_sequence"
    )
    private Long id;

    @OneToOne
    @JoinColumn(name = "course_id")
    private Course course;

    @OneToMany(targetEntity = Student.class, cascade = CascadeType.ALL)
    @JoinColumn(name = "s_fk", referencedColumnName = "id")
    private List<Student> students = new ArrayList<>();

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

    public List<Student> getStudents() {
        return students;
    }

    public void setStudents(List<Student> students) {
        this.students = students;
    }

    @Override
    public String toString() {
        return "CourseEnrollment{" +
                "id=" + id +
                ", course=" + course +
                ", students=" + students +
                '}';
    }
}
