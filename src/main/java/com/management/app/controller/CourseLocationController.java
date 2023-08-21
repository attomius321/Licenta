package com.management.app.controller;

import com.management.app.DTOs.CourseLocationDTO;
import com.management.app.service.CourseLocationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(path = "api/v1/courseLocation")
public class CourseLocationController {

    private final CourseLocationService courseLocationService;

    @Autowired
    public CourseLocationController(CourseLocationService courseLocationService) {
        this.courseLocationService = courseLocationService;
    }

    @GetMapping
    public List<CourseLocationDTO> getCourseLocations() {
        return courseLocationService.getCourseLocations();
    }

}
