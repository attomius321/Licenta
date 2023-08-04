package com.management.app.model;

import jakarta.persistence.*;

import java.util.UUID;

@Entity
@Table
public class CourseLocation {
    @Id
    @GeneratedValue(
            strategy = GenerationType.UUID
    )
    private UUID id;
}
