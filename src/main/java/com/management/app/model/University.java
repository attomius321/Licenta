package com.management.app.model;

import jakarta.persistence.*;

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
}
