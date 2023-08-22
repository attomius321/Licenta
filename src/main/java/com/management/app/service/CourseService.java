package com.management.app.service;

import com.management.app.DTOs.CourseDTO;
import com.management.app.DTOs.TeacherDTO;
import com.management.app.DTOs.UniversityDTO;
import com.management.app.model.Course;
import com.management.app.model.Teacher;
import com.management.app.repository.CourseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class CourseService {

    private final CourseRepository courseRepository;

    @Autowired
    public CourseService(CourseRepository courseRepository) {
        this.courseRepository = courseRepository;
    }

    public List<CourseDTO> getCourses() {
        List<Course> courses = courseRepository.findAll();
        List<CourseDTO> courseDTOS =
                courses.stream()
                        .map(course -> new CourseDTO(course.getId().toString(), course.getName(), course.getScheduleColor()))
                        .collect(Collectors.toList());
        return courseDTOS;
    }
}
