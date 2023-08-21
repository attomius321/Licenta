package com.management.app.service;

import com.management.app.DTOs.CourseLocationDTO;
import com.management.app.model.CourseLocation;
import com.management.app.repository.CourseLocationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class CourseLocationService {

    private final CourseLocationRepository courseLocationRepository;

    @Autowired
    public CourseLocationService(CourseLocationRepository courseLocationRepository) {
        this.courseLocationRepository = courseLocationRepository;
    }
    public List<CourseLocationDTO> getCourseLocations() {
        List<CourseLocation> courseLocations = courseLocationRepository.findAll();
        List<CourseLocationDTO> courseLocationDTOS =
                courseLocations.stream()
                        .map(courseLocation -> new CourseLocationDTO(courseLocation.getId().toString(), courseLocation.getName(), courseLocation.getAddress()))
                        .collect(Collectors.toList());
        return courseLocationDTOS;
    }
}
