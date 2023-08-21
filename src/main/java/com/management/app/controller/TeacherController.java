package com.management.app.controller;

import com.management.app.DTOs.StudentDTO;
import com.management.app.DTOs.TeacherDTO;
import com.management.app.model.Teacher;
import com.management.app.service.StudentService;
import com.management.app.service.TeacherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

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

}
