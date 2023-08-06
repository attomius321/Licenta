package com.management.app.service;

import com.management.app.DTOs.CourseScheduleDTO;
import com.management.app.DTOs.StudentDTO;
import com.management.app.model.CourseSchedule;
import com.management.app.model.Student;
import com.management.app.repository.CourseScheduleRepository;
import com.management.app.repository.StudentRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.Set;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
public class StudentCourseScheduleService {

    private final StudentRepository studentRepository;

    private final CourseScheduleRepository courseScheduleRepository;

    @Autowired
    public StudentCourseScheduleService(StudentRepository studentRepository,
                                        CourseScheduleRepository courseScheduleRepository) {
        this.studentRepository = studentRepository;
        this.courseScheduleRepository = courseScheduleRepository;
    }

    public boolean assignStudentToCourseSchedule(UUID courseScheduleId, UUID studentId) {
        try {
            //Get courseSchedule and student from db
            Optional<Student> foundStudent = studentRepository.findById(studentId);
            Optional<CourseSchedule> foundCourseSchedule = courseScheduleRepository.findById(courseScheduleId);

            //Get current courseSchedules from found student and save new entry
            foundStudent.get().addCourseSchedule(foundCourseSchedule.get());

            //Save student to found courseSchedule
            foundCourseSchedule.get().addStudent(foundStudent.get());
            studentRepository.save(foundStudent.get());
            return true;
        } catch (Exception e) {
            return false;
        }
    }

    public ResponseEntity<Set<StudentDTO>> getStudentsFromCourseSchedule(UUID csId) {
        Optional<CourseSchedule> courseScheduleOptional = courseScheduleRepository.findById(csId);

        if (courseScheduleOptional.isPresent()) {
            CourseSchedule courseSchedule = courseScheduleOptional.get();
            Set<StudentDTO> studentDTOs = courseSchedule.getStudents().stream()
                    .map(student -> new StudentDTO(student.getId(), student.getFirstName(), student.getLastName(), student.getYear(), student.getFaculty()))
                    .collect(Collectors.toSet());
            return new ResponseEntity<>(studentDTOs, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

}
