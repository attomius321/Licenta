package com.management.app.config.mocked;

import com.management.app.model.*;
import com.management.app.repository.*;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.List;
import java.util.Optional;
import java.util.Set;

@Configuration
public class PopulateDBConfig {
    @Bean
    CommandLineRunner commandLineRunnerInitDB(
            UserRepository repository,
            StudentRepository studentRepository,
            TeacherRepository teacherRepository,
            UniversityRepository universityRepository,
            CourseScheduleRepository courseScheduleRepository) {
        return args -> {
            User user_student1 = new User();
            user_student1.setEmail("student1@gmail.com");
            user_student1.setPassword("password");
            user_student1.getRoles().add(UserRole.ROLE_STUDENT);

            User user_student2 = new User();
            user_student2.setEmail("student2@gmail.com");
            user_student2.setPassword("password");
            user_student2.getRoles().add(UserRole.ROLE_STUDENT);

            User user_teacher1 = new User();
            user_teacher1.setEmail("teacher1@gmail.com");
            user_teacher1.setPassword("password");
            user_teacher1.getRoles().add(UserRole.ROLE_TEACHER);

            User user_teacher2 = new User();
            user_teacher2.setEmail("teacher2@gmail.com");
            user_teacher2.setPassword("password");
            user_teacher2.getRoles().add(UserRole.ROLE_TEACHER);

            User user_admin = new User();
            user_admin.setEmail("admin@gmail.com");
            user_admin.setPassword("password");
            user_admin.getRoles().add(UserRole.ROLE_ADMIN);

            repository.saveAll(
                    List.of(user_student1, user_student2, user_teacher1, user_teacher2, user_admin)
            );


            Student student1 = new Student(
                    "Student",
                    "1",
                    1,
                    "UPT AC CTI"
            );

            Student student2 = new Student(
                    "Student",
                    "2",
                    2,
                    "UPT AC CTI"
            );

            student1.setUser(user_student1);

            student2.setUser(user_student2);

            studentRepository.saveAll(List.of(student1, student2));

            University university1 = new University();
            university1.setName("CTI");

            University university2 = new University();
            university2.setName("IS");

            universityRepository.saveAll(List.of(university1, university2));

            Teacher teacher1 = new Teacher();
            teacher1.setName("Teacher 1");
            teacher1.setUniversity(university1);

            Teacher teacher2 = new Teacher();
            teacher2.setName("Teacher 2");
            teacher2.setUniversity(university2);

            teacher1.setUser(user_teacher1);
            teacher2.setUser(user_teacher2);

            teacherRepository.saveAll(List.of(teacher1, teacher2));

            CourseSchedule cs1 = new CourseSchedule(4, 2);
            CourseSchedule cs2 = new CourseSchedule(3, 1);

            courseScheduleRepository.saveAll(List.of(cs1, cs2));

            student1.addCourseSchedule(cs1);

            studentRepository.save(student1);

            student2.addCourseSchedule(cs1);
            student2.addCourseSchedule(cs2);
            studentRepository.save(student2);
        };
    }
}
