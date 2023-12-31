package com.management.app.DTOs;

import com.management.app.model.Course;

public class CourseDTO {

    private String id;

    private String name;

    private String scheduleColor;

    public CourseDTO(String id, String name, String scheduleColor) {
        this.id = id;
        this.name = name;
        this.scheduleColor = scheduleColor;
    }

    public CourseDTO(Course course) {
        this.id = course.getId().toString();
        this.name = course.getName();
        this.scheduleColor = course.getScheduleColor();
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getScheduleColor() {
        return scheduleColor;
    }

    public void setScheduleColor(String scheduleColor) {
        this.scheduleColor = scheduleColor;
    }
}
