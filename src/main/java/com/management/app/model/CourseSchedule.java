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

    private int dayOfWeek;
    private int hourInterval;

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
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
                ", dayOfWeek=" + dayOfWeek +
                ", hourInterval=" + hourInterval +
                '}';
    }
}
