package com.management.app.controller;

import com.management.app.DTOs.CourseLocationDTO;
import com.management.app.model.CourseLocation;
import com.management.app.service.CourseLocationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.text.ParseException;
import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

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

    @PostMapping
    public CourseLocationDTO createCourseLocation(@RequestBody CourseLocationDTO courseLocationDTO) throws ParseException {
        CourseLocation courseLocation = courseLocationService.createCourseLocation(courseLocationDTO);
        return new CourseLocationDTO(courseLocation.getId().toString(), courseLocation.getName(), courseLocation.getAddress());
    }

    @PutMapping
    public CourseLocationDTO updateCourseLocation(@RequestBody CourseLocationDTO courseLocationDTO) throws ParseException {
        CourseLocation courseLocation = courseLocationService.updateCourseLocation(courseLocationDTO);
        return new CourseLocationDTO(courseLocation.getId().toString(), courseLocation.getName(), courseLocation.getAddress());
    }

    @DeleteMapping
    public void deleteCourseLocationsByIds(@RequestBody List<String> ids) {
        System.out.println(ids);
        courseLocationService.deleteCourseLocationsById(ids.stream().map(id -> UUID.fromString(id)).collect(Collectors.toSet()));
    }

}
