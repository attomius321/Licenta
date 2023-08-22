package com.management.app.controller;

import com.management.app.DTOs.CourseDTO;
import com.management.app.DTOs.TeacherDTO;
import com.management.app.DTOs.UniversityDTO;
import com.management.app.model.Teacher;
import com.management.app.service.TeacherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.text.ParseException;
import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@RestController
@RequestMapping(path = "api/v1/teacher")
public class TeacherController {

    private final TeacherService teacherService;

    @Autowired
    public TeacherController(TeacherService teacherService) {
        this.teacherService = teacherService;
    }

    @GetMapping
    public List<TeacherDTO> getTeachers() {
        return teacherService.getTeachers();
    }

    @PostMapping
    public TeacherDTO createTeacher(@RequestBody TeacherDTO teacherDTO) throws ParseException {
        Teacher teacher = teacherService.createTeacher(teacherDTO);
        return new TeacherDTO(teacher.getId().toString(), teacher.getFirstName(), teacher.getLastName(),
                teacher.getUniversities().stream().map(university -> new UniversityDTO(university.getId().toString(), university.getName(), university.getAddress())).collect(Collectors.toSet()),
                teacher.getCourses().stream().map(course -> new CourseDTO(course.getId().toString(), course.getName(), course.getScheduleColor())).collect(Collectors.toSet()),
                teacher.getUser().getEmail());
    }

    @PutMapping
    public TeacherDTO updateTeacher(@RequestBody TeacherDTO teacherDTO) throws ParseException {
        Teacher teacher = teacherService.updateTeacher(teacherDTO);
        return new TeacherDTO(teacher.getId().toString(), teacher.getFirstName(), teacher.getLastName(),
                teacher.getUniversities().stream().map(university -> new UniversityDTO(university.getId().toString(), university.getName(), university.getAddress())).collect(Collectors.toSet()),
                teacher.getCourses().stream().map(course -> new CourseDTO(course.getId().toString(), course.getName(), course.getScheduleColor())).collect(Collectors.toSet()),
                teacher.getUser().getEmail());
    }

    @DeleteMapping
    public void deleteTeachersByIds(@RequestBody List<String> ids) {
        teacherService.deleteTeachersByIds(ids.stream().map(id -> UUID.fromString(id)).collect(Collectors.toSet()));
    }

}
