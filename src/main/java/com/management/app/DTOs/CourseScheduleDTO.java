package com.management.app.DTOs;

import java.util.UUID;

public class CourseScheduleDTO {
    private String id;

    private Integer dayOfWeek;
    private Integer hours;

    public CourseScheduleDTO(UUID id, Integer dayOfWeek, Integer hours) {
        this.id = id.toString();
        this.dayOfWeek = dayOfWeek;
        this.hours = hours;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public Integer getDayOfWeek() {
        return dayOfWeek;
    }

    public void setDayOfWeek(Integer dayOfWeek) {
        this.dayOfWeek = dayOfWeek;
    }

    public Integer getHours() {
        return hours;
    }

    public void setHours(Integer hours) {
        this.hours = hours;
    }
}
