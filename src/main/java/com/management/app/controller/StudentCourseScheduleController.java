package com.management.app.controller;

import com.management.app.DTOs.StudentDTO;
import com.management.app.controller.models.ReqBodyCourseScheduleStudent;
import com.management.app.model.Course;
import com.management.app.model.CourseSchedule;
import com.management.app.model.Student;
import com.management.app.service.StudentCourseScheduleService;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping("/api/v1/courseSchedule/student")
public class StudentCourseScheduleController {

    private StudentCourseScheduleService studentCourseScheduleService;

    @Autowired
    public StudentCourseScheduleController(StudentCourseScheduleService studentCourseScheduleService) {
        this.studentCourseScheduleService = studentCourseScheduleService;
    }

    @GetMapping(value = "/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Set<StudentDTO>> getStudentsByCourseScheduleId(@PathVariable("id") String csId) {
        return this.studentCourseScheduleService.getStudentsFromCourseSchedule(UUID.fromString(csId));
    }

    @PutMapping("/{id}")
    public boolean assignStudentToCourseSchedule(@RequestBody ReqBodyCourseScheduleStudent cs, @PathVariable("id") String sId) {
        return this.studentCourseScheduleService.assignStudentToCourseSchedule(UUID.fromString(cs.getCsId()), UUID.fromString(sId));
    }

}
