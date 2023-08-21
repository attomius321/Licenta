package com.management.app.service;

import com.management.app.DTOs.StudentDTO;
import com.management.app.DTOs.UserDTO;
import com.management.app.model.CourseSchedule;
import com.management.app.model.Student;
import com.management.app.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class StudentService {

    private final StudentRepository studentRepository;

    @Autowired
    public StudentService(StudentRepository studentRepository) {
        this.studentRepository = studentRepository;
    }
    public List<StudentDTO> getStudents() {
        List<Student> students = studentRepository.findAll();
        List<StudentDTO> studentDTOs =
                students.stream()
                        .map(student -> new StudentDTO(student.getId(), student.getFirstName(), student.getLastName(), student.getYear(), student.getUniversity().getName(), student.getUser().getEmail()))
                        .collect(Collectors.toList());
        return studentDTOs;
    }
}
