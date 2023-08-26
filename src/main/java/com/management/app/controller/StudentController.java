package com.management.app.controller;

import com.management.app.DTOs.StudentDTO;
import com.management.app.model.Student;
import com.management.app.service.StudentService;
import jakarta.annotation.security.RolesAllowed;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(path = "api/v1/student")
public class StudentController {

    private final StudentService studentService;

    @Autowired
    public StudentController(StudentService studentService) {
        this.studentService = studentService;
    }

    @GetMapping
    @RolesAllowed({"ADMIN", "USER_TEACHER"})
    public List<StudentDTO> getStudents() {
        return studentService.getStudents();
    }

}
