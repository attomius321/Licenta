package com.management.app.model;

import jakarta.persistence.*;

import java.util.Set;
import java.util.UUID;

@Entity
@Table
public class University {
    @Id
    @GeneratedValue(
            strategy = GenerationType.UUID
    )
    private UUID id;

    private String name;

    @OneToMany(mappedBy = "university")
    private Set<Teacher> teacherSet;

    @OneToMany(mappedBy = "university")
    private Set<Student> studentSet;

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

    public Set<Teacher> getTeacherSet() {
        return teacherSet;
    }

    public void setTeacherSet(Set<Teacher> teacherSet) {
        this.teacherSet = teacherSet;
    }

    public Set<Student> getStudentSet() {
        return studentSet;
    }

    public void setStudentSet(Set<Student> studentSet) {
        this.studentSet = studentSet;
    }
}
