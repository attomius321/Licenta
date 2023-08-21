package com.management.app.service;

import com.management.app.DTOs.StudentDTO;
import com.management.app.DTOs.TeacherDTO;
import com.management.app.DTOs.UserDTO;
import com.management.app.model.Student;
import com.management.app.model.Teacher;
import com.management.app.repository.StudentRepository;
import com.management.app.repository.TeacherRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class TeacherService {

    private final TeacherRepository teacherRepository;

    @Autowired
    public TeacherService(TeacherRepository teacherRepository) {
        this.teacherRepository = teacherRepository;
    }

    public List<TeacherDTO> getTeachers() {
        List<Teacher> teachers = teacherRepository.findAll();
        List<TeacherDTO> teacherDTOs =
                teachers.stream()
                        .map(teacher -> new TeacherDTO(teacher.getId(), teacher.getFirstName(), teacher.getLastName(), teacher.getUniversity().getName(), teacher.getUser().getEmail()))
                        .collect(Collectors.toList());
        return teacherDTOs;
    }
}
