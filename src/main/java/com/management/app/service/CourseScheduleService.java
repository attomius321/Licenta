package com.management.app.service;

import com.management.app.DTOs.*;
import com.management.app.model.Course;
import com.management.app.model.CourseLocation;
import com.management.app.model.CourseSchedule;
import com.management.app.model.Teacher;
import com.management.app.repository.*;
import com.management.app.security.entities.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.ParseException;
import java.util.List;
import java.util.Set;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
public class CourseScheduleService {

    private CourseScheduleRepository courseScheduleRepository;
    private CourseRepository courseRepository;
    private TeacherRepository teacherRepository;

    private CourseLocationRepository courseLocationRepository;

    private StudentRepository studentRepository;

    @Autowired
    public CourseScheduleService(
            CourseScheduleRepository courseScheduleRepository,
            CourseRepository courseRepository,
            TeacherRepository teacherRepository,
            CourseLocationRepository courseLocationRepository,
            StudentRepository studentRepository
    ) {
        this.courseScheduleRepository = courseScheduleRepository;
        this.courseRepository = courseRepository;
        this.teacherRepository = teacherRepository;
        this.courseLocationRepository = courseLocationRepository;
        this.studentRepository = studentRepository;
    }

    public List<CourseScheduleDTO> getCourseSchedules() {
        List<CourseSchedule> courseSchedules = courseScheduleRepository.findAll();
        List<CourseScheduleDTO> courseScheduleDTOS =
                courseSchedules.stream()
                        .map(courseSchedule -> new CourseScheduleDTO(courseSchedule.getId().toString(),
                                courseSchedule.getDayOfWeek(), courseSchedule.getStartsAt(), courseSchedule.getEndsAt(), courseSchedule.getMaxAllocation(),
                                courseSchedule.getStudents().stream().map(student -> new StudentDTO(student)).collect(Collectors.toList()),
                                new CourseDTO(courseSchedule.getCourse()), new CourseLocationDTO(courseSchedule.getCourseLocation()),new TeacherDTO(courseSchedule.getTeacher())))
                        .collect(Collectors.toList());
        return courseScheduleDTOS;
    }

    public CourseSchedule createCourseSchedule(CourseScheduleDTO courseScheduleDTO) throws ParseException {
        return courseScheduleRepository.save(createNewEntity(courseScheduleDTO));
    }

    public CourseSchedule updateCourseSchedule(CourseScheduleDTO courseScheduleDTO) {
        CourseSchedule courseSchedule = courseScheduleRepository.findById(UUID.fromString(courseScheduleDTO.getId())).get();
        courseSchedule.setDayOfWeek(courseScheduleDTO.getDayOfWeek());
        courseSchedule.setStartsAt(courseScheduleDTO.getStartsAtHour());
        courseSchedule.setEndsAt(courseScheduleDTO.getEndsAtHour());
        courseSchedule.setMaxAllocation(courseScheduleDTO.getMaxAllocation());
        courseSchedule.setCourse(courseRepository.findById(UUID.fromString(courseScheduleDTO.getCourse().getId())).get());
        courseSchedule.setCourseLocation(courseLocationRepository.findById(UUID.fromString(courseScheduleDTO.getCourseLocation().getId())).get());
        courseSchedule.setTeacher(teacherRepository.findById(UUID.fromString(courseScheduleDTO.getTeacher().getId())).get());
        return courseScheduleRepository.save(courseSchedule);
    }

    public void deleteCourseSchedulesByIds(Set<UUID> uuids) {
        Set<CourseSchedule> courseSchedules = uuids.stream().map(uuid -> courseScheduleRepository.findById(uuid).get()).collect(Collectors.toSet());
        courseSchedules.forEach(courseSchedule -> courseScheduleRepository.delete(courseSchedule));
    }

    private CourseSchedule createNewEntity(CourseScheduleDTO courseScheduleDTO) throws ParseException {
        CourseSchedule courseSchedule = new CourseSchedule();
        courseSchedule.setDayOfWeek(courseScheduleDTO.getDayOfWeek());
        courseSchedule.setStartsAt(courseScheduleDTO.getStartsAtHour());
        courseSchedule.setEndsAt(courseScheduleDTO.getEndsAtHour());
        courseSchedule.setMaxAllocation(courseScheduleDTO.getMaxAllocation());
        courseSchedule.setCourse(courseRepository.findById(UUID.fromString(courseScheduleDTO.getCourse().getId())).get());
        courseSchedule.setCourseLocation(courseLocationRepository.findById(UUID.fromString(courseScheduleDTO.getCourseLocation().getId())).get());
        courseSchedule.setTeacher(teacherRepository.findById(UUID.fromString(courseScheduleDTO.getTeacher().getId())).get());
        return courseSchedule;
    }
}
