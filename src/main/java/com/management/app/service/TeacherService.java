package com.management.app.service;

import com.management.app.DTOs.*;
import com.management.app.model.CourseLocation;
import com.management.app.model.Student;
import com.management.app.model.Teacher;
import com.management.app.repository.StudentRepository;
import com.management.app.repository.TeacherRepository;
import com.management.app.repository.UniversityRepository;
import com.management.app.security.entities.Role;
import com.management.app.security.entities.User;
import com.management.app.security.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.text.ParseException;
import java.util.List;
import java.util.Set;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
public class TeacherService {

    private final TeacherRepository teacherRepository;
    private final UserRepository userRepository;

    private final UniversityRepository universityRepository;

    private final PasswordEncoder passwordEncoder;

    @Autowired
    public TeacherService(TeacherRepository teacherRepository, UserRepository userRepository, UniversityRepository universityRepository,
        PasswordEncoder passwordEncoder) {
        this.teacherRepository = teacherRepository;
        this.userRepository = userRepository;
        this.universityRepository = universityRepository;
        this.passwordEncoder = passwordEncoder;
    }

    public List<TeacherDTO> getTeachers() {
        List<Teacher> teachers = teacherRepository.findAll();
        List<TeacherDTO> teacherDTOs =
                teachers.stream()
                        .map(teacher -> new TeacherDTO(teacher.getId().toString(), teacher.getFirstName(), teacher.getLastName(),
                                teacher.getUniversities().stream().map(university -> new UniversityDTO(university.getId().toString(), university.getName(), university.getAddress())).collect(Collectors.toSet()),
                                teacher.getUser().getEmail()))
                        .collect(Collectors.toList());
        return teacherDTOs;
    }

    public Teacher createTeacher(TeacherDTO teacherDTO) throws ParseException {
        Teacher teacher = createNewEntity(teacherDTO);
        User user = new User();
        user.setRole(Role.USER_TEACHER);
        user.setEmail(teacherDTO.getEmail());
        user.setPassword(passwordEncoder.encode("password"));
        userRepository.save(user);
        teacher.setUser(user);
        return teacherRepository.save(teacher);
    }

    public Teacher updateTeacher(TeacherDTO teacherDTO) {
        Teacher teacher = teacherRepository.findById(UUID.fromString(teacherDTO.getId())).get();
        teacher.setFirstName(teacherDTO.getFirstName());
        teacher.setLastName(teacherDTO.getLastName());
        teacher.removeAllUniversities();
        teacherDTO.getUniversities().stream().forEach(universityDTO -> teacher.addUniversity(universityRepository.findById(UUID.fromString(universityDTO.getId())).get()));
        return teacherRepository.save(teacher);
    }

    public void deleteTeachersByIds(Set<UUID> uuids) {
        Set<Teacher> teachers = uuids.stream().map(uuid -> teacherRepository.findById(uuid).get()).collect(Collectors.toSet());
        Set<User> users = teachers.stream().map(teacher -> teacher.getUser()).collect(Collectors.toSet());
        teachers.forEach(courseLocation -> teacherRepository.delete(courseLocation));
        users.forEach(user -> userRepository.delete(user));
    }

    private Teacher createNewEntity(TeacherDTO teacherDTO) throws ParseException {
        Teacher teacher = new Teacher();
        teacher.setFirstName(teacherDTO.getFirstName());
        teacher.setLastName(teacherDTO.getLastName());
        teacherDTO.getUniversities().stream().forEach(universityDTO -> teacher.addUniversity(universityRepository.findById(UUID.fromString(universityDTO.getId())).get()));
        return teacher;
    }
}
