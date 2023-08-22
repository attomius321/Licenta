package com.management.app.service;

import com.management.app.DTOs.CourseLocationDTO;
import com.management.app.model.Course;
import com.management.app.model.CourseLocation;
import com.management.app.repository.CourseLocationRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.ParseException;
import java.util.*;
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

    public CourseLocation createCourseLocation(CourseLocationDTO courseLocationDTO) throws ParseException {
        return courseLocationRepository.save(createNewEntity(courseLocationDTO));
    }

    public CourseLocation updateCourseLocation(CourseLocationDTO courseLocationDTO) {
        CourseLocation courseLocation = courseLocationRepository.findById(UUID.fromString(courseLocationDTO.getId())).get();
        courseLocation.setName(courseLocationDTO.getName());
        courseLocation.setAddress(courseLocationDTO.getAddress());
        return courseLocationRepository.save(courseLocation);
    }

    public void deleteCourseLocationsById(Set<UUID> uuids) {
        Set<CourseLocation> courseLocations = uuids.stream().map(uuid -> courseLocationRepository.findById(uuid).get()).collect(Collectors.toSet());
        courseLocations.forEach(courseLocation -> courseLocationRepository.delete(courseLocation));
    }

    private CourseLocation createNewEntity(CourseLocationDTO courseLocationDTO) throws ParseException {
        CourseLocation courseLocation = new CourseLocation();
        courseLocation.setName(courseLocationDTO.getName());
        courseLocation.setAddress(courseLocationDTO.getAddress());
        return courseLocation;
    }

}
