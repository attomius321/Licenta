package com.management.app.config.initDB;

import com.management.app.model.*;
import com.management.app.repository.*;
import com.management.app.security.entities.Role;
import com.management.app.security.entities.User;
import com.management.app.security.repository.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.Date;
import java.util.List;

@Configuration
public class PopulateDBConfig {
    @Bean
    CommandLineRunner commandLineRunnerInitDB(
            UserRepository repository,
            StudentRepository studentRepository,
            TeacherRepository teacherRepository,
            UniversityRepository universityRepository,
            CourseScheduleRepository courseScheduleRepository,
            CourseRepository courseRepository,
            CourseLocationRepository courseLocationRepository,
            PasswordEncoder passwordEncoder) {
        return args -> {
            User user_student1 = new User();
            user_student1.setEmail("student1@upt.ro");
            user_student1.setPassword(passwordEncoder.encode("password"));
            user_student1.setRole(Role.USER_STUDENT);

            User user_student2 = new User();
            user_student2.setEmail("student2@upt.ro");
            user_student2.setPassword(passwordEncoder.encode("password"));
            user_student2.setRole(Role.USER_STUDENT);

            User user_teacher1 = new User();
            user_teacher1.setEmail("teacher1@upt.ro");
            user_teacher1.setPassword(passwordEncoder.encode("password"));
            user_teacher1.setRole(Role.USER_TEACHER);

            User user_teacher2 = new User();
            user_teacher2.setEmail("teacher2@upt.ro");
            user_teacher2.setPassword(passwordEncoder.encode("password"));
            user_teacher2.setRole(Role.USER_TEACHER);

            User user_admin = new User();
            user_admin.setEmail("admin@upt.ro");
            user_admin.setPassword(passwordEncoder.encode("password"));
            user_admin.setRole(Role.ADMIN);

            repository.saveAll(
                    List.of(user_student1, user_student2, user_teacher1, user_teacher2, user_admin)
            );

            University university1 = new University();
            university1.setName("Arhitectura si Urbanism");
            university1.setAddress("Str. Traian Lalescu Nr. 2/A 300 223 – Timişoara, Jud. Timiş, România");

            University university2 = new University();
            university2.setName("Automatică şi Calculatoare");
            university2.setAddress("Bulevardul Vasile Pârvan, Nr. 2 300223 Timişoara, jud. Timiş, România");

            University university3 = new University();
            university3.setName("Chimie Industrială şi Ingineria Mediului");
            university3.setAddress("Bulevardul Vasile Pârvan, Nr. 6 300223, Timişoara, jud. Timiş, România");

            University university4 = new University();
            university4.setName("Construcţii");
            university4.setAddress("Str. Traian Lalescu Nr. 2 300 223 – Timişoara, Jud. Timiş, România");

            University university5 = new University();
            university5.setName("Electronică, Telecomunicaţii și Tehnologii Informaționale");
            university5.setAddress("Bd. Vasile Pârvan, Nr. 2 300223, Timişoara, jud. Timiş, România");

            University university6 = new University();
            university6.setName("Inginerie Electrică și Energetică");
            university6.setAddress("Bd. Vasile Pârvan, Nr. 2 300223, Timişoara, jud. Timiş, România");

            University university7 = new University();
            university7.setName("Inginerie din Hunedoara");
            university7.setAddress("Str. Revoluţiei, Nr. 5 331128 Hunedoara, România");

            University university8 = new University();
            university8.setName("Management în Producţie şi Transporturi");
            university8.setAddress("Strada Remus, nr.14 300191, Timișoara, jud. Timiş, România");

            University university9 = new University();
            university9.setName("Mecanică");
            university9.setAddress("Bulevardul Mihai Viteazu Nr. 1 300222 Timişoara, jud. Timiş, România");

            University university10 = new University();
            university10.setName("Stiinţe ale Comunicării");
            university10.setAddress("Str. Traian Lalescu Nr. 2 300223 – Timişoara, Jud. Timiş, România");

            universityRepository.saveAll(List.of(university1, university2, university3, university4, university5, university6, university7, university8, university9, university10));

            Student student1 = new Student();
            student1.setFirstName("Student");
            student1.setLastName("1");
            student1.setYear(1);
            student1.setUniversity(university1);

            Student student2 = new Student();
            student2.setFirstName("Student");
            student2.setLastName("2");
            student2.setYear(1);
            student2.setUniversity(university2);

            student1.setUser(user_student1);

            student2.setUser(user_student2);

            studentRepository.saveAll(List.of(student1, student2));

            Teacher teacher1 = new Teacher();
            teacher1.setFirstName("Teacher");
            teacher1.setLastName("1");
            teacher1.addUniversity(university1);
            teacher1.addUniversity(university2);


            Teacher teacher2 = new Teacher();
            teacher2.setFirstName("Teacher");
            teacher2.setLastName("2");
            teacher2.addUniversity(university3);
            teacher2.addUniversity(university4);

            teacher1.setUser(user_teacher1);
            teacher2.setUser(user_teacher2);

            teacherRepository.saveAll(List.of(teacher1, teacher2));

            Course course1 = new Course();
            course1.setName("Football");

            Course course2 = new Course();
            course2.setName("Gym");

            courseRepository.saveAll(List.of(course1, course2));

            CourseLocation cl1 = new CourseLocation();
            cl1.setName("Baza 1");
            cl1.setAddress("Timişoara, 300223 Traian Lalescu nr. 2A");

            CourseLocation cl2 = new CourseLocation();
            cl2.setName("Baza 2");
            cl2.setAddress("Timişoara, 300586 Str. Păunescu Podeanu nr.2, (lângă Stadionul Dan Paltinişanu)");

            courseLocationRepository.saveAll(List.of(cl1, cl2));

            CourseSchedule cs1 = new CourseSchedule();
            cs1.setCourse(course1);
            cs1.setCourseLocation(cl1);
            CourseSchedule cs2 = new CourseSchedule();
            cs2.setCourse(course2);
            cs2.setCourseLocation(cl2);

            courseScheduleRepository.saveAll(List.of(cs1, cs2));

        };
    }
}
