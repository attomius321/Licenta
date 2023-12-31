package com.management.app.controller;

import com.management.app.DTOs.*;
import com.management.app.model.CourseLocation;
import com.management.app.model.CourseSchedule;
import com.management.app.model.Teacher;
import com.management.app.service.CourseScheduleService;
import jakarta.annotation.security.RolesAllowed;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.text.ParseException;
import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@RestController
@RequestMapping(path = "api/v1/courseSchedule")
public class CourseScheduleController {

    private final CourseScheduleService courseScheduleService;

    @Autowired
    public CourseScheduleController(CourseScheduleService courseScheduleService) {
        this.courseScheduleService = courseScheduleService;
    }

    @GetMapping
    public List<CourseScheduleDTO> getCourseSchedules() {
        return courseScheduleService.getCourseSchedules();
    }

    @PostMapping
    @PreAuthorize("hasAnyRole('ROLE_ADMIN', 'ROLE_TEACHER')")
    public CourseScheduleDTO createCourseSchedule(@RequestBody CourseScheduleDTO courseScheduleDTO) throws ParseException {
        CourseSchedule courseSchedule = courseScheduleService.createCourseSchedule(courseScheduleDTO);
        return new CourseScheduleDTO(courseSchedule);
    }

    @PutMapping
    @PreAuthorize("hasAnyRole('ROLE_ADMIN', 'ROLE_TEACHER')")
    public CourseScheduleDTO updateCourseSchedule(@RequestBody CourseScheduleDTO courseScheduleDTO) throws ParseException {
        CourseSchedule courseSchedule = courseScheduleService.updateCourseSchedule(courseScheduleDTO);
        return new CourseScheduleDTO(courseSchedule);
    }

    @DeleteMapping
    @PreAuthorize("hasAnyRole('ROLE_ADMIN', 'ROLE_TEACHER')")
    public void deleteCourseSchedulesByIds(@RequestBody List<String> ids) {
        courseScheduleService.deleteCourseSchedulesByIds(ids.stream().map(id -> UUID.fromString(id)).collect(Collectors.toSet()));
    }
}
