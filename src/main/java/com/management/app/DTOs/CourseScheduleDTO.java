package com.management.app.DTOs;

import com.management.app.model.*;

import java.util.HashSet;
import java.util.List;
import java.util.stream.Collectors;


public class CourseScheduleDTO {
    private String id;
    private Integer dayOfWeek;
    private String startsAtHour;
    private String endsAtHour;

    private Integer maxAllocation;
    private List<StudentDTO> students;
    private CourseDTO course;
    private CourseLocationDTO courseLocation;
    private TeacherDTO teacher;

    public CourseScheduleDTO(String id, Integer dayOfWeek, String startsAtHour, String endsAtHour, Integer maxAllocation,
                             List<StudentDTO> students, CourseDTO course, CourseLocationDTO courseLocation, TeacherDTO teacher) {
        this.id = id;
        this.dayOfWeek = dayOfWeek;
        this.startsAtHour = startsAtHour;
        this.endsAtHour = endsAtHour;
        this.maxAllocation = maxAllocation;
        this.students = students;
        this.course = course;
        this.courseLocation = courseLocation;
        this.teacher = teacher;
    }

    public CourseScheduleDTO(CourseSchedule courseSchedule) {
        this.id = courseSchedule.getId().toString();
        this.dayOfWeek = courseSchedule.getDayOfWeek();
        this.startsAtHour = courseSchedule.getStartsAt();
        this.endsAtHour = courseSchedule.getEndsAt();
        this.maxAllocation = courseSchedule.getMaxAllocation();
        this.students = courseSchedule.getStudents().stream().map(student -> new StudentDTO(student)).collect(Collectors.toList());
        this.course = new CourseDTO(courseSchedule.getCourse());
        this.courseLocation = new CourseLocationDTO(courseSchedule.getCourseLocation());
        this.teacher = new TeacherDTO(courseSchedule.getTeacher());
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

    public String getStartsAtHour() {
        return startsAtHour;
    }

    public void setStartsAtHour(String startsAtHour) {
        this.startsAtHour = startsAtHour;
    }

    public String getEndsAtHour() {
        return endsAtHour;
    }

    public void setEndsAtHour(String endsAtHour) {
        this.endsAtHour = endsAtHour;
    }

    public Integer getMaxAllocation() {
        return maxAllocation;
    }

    public void setMaxAllocation(Integer maxAllocation) {
        this.maxAllocation = maxAllocation;
    }

    public List<StudentDTO> getStudents() {
        return students;
    }

    public void setStudents(List<StudentDTO> students) {
        this.students = students;
    }

    public CourseDTO getCourse() {
        return course;
    }

    public void setCourse(CourseDTO course) {
        this.course = course;
    }

    public CourseLocationDTO getCourseLocation() {
        return courseLocation;
    }

    public void setCourseLocation(CourseLocationDTO courseLocation) {
        this.courseLocation = courseLocation;
    }

    public TeacherDTO getTeacher() {
        return teacher;
    }

    public void setTeacher(TeacherDTO teacher) {
        this.teacher = teacher;
    }
}
