package com.management.app.controller;

import com.management.app.DTOs.CourseDTO;
import com.management.app.DTOs.TeacherDTO;
import com.management.app.service.CourseService;
import com.management.app.service.TeacherService;
import jakarta.annotation.security.RolesAllowed;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping(path = "api/v1/course")
public class CourseController {

    private final CourseService courseService;

    @Autowired
    public CourseController(CourseService courseService) {
        this.courseService = courseService;
    }

    @GetMapping
    @ResponseBody
    public List<CourseDTO> getCourses(@RequestParam(required = false) String teacherId ) {
        if (teacherId != null)
            return courseService.getCoursesByTeachers(UUID.fromString(teacherId));
        else
            return courseService.getCourses();
    }

}
