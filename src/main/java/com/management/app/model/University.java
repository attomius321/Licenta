package com.management.app.model;

import jakarta.persistence.*;

import java.util.HashSet;
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

    private String address;

    @ManyToMany(mappedBy = "universities", fetch = FetchType.LAZY)
    private Set<Teacher> teachers = new HashSet<>();

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

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public Set<Teacher> getTeachers() {
        return teachers;
    }

    public void setTeacherSet(Set<Teacher> teachers) {
        this.teachers = teachers;
    }

    public Set<Student> getStudentSet() {
        return studentSet;
    }

    public void setStudentSet(Set<Student> studentSet) {
        this.studentSet = studentSet;
    }
}
