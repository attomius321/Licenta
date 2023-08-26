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
            user_student1.setRole(Role.ROLE_STUDENT);

            User user_student2 = new User();
            user_student2.setEmail("student2@upt.ro");
            user_student2.setPassword(passwordEncoder.encode("password"));
            user_student2.setRole(Role.ROLE_STUDENT);

            User user_student3 = new User();
            user_student3.setEmail("student3@upt.ro");
            user_student3.setPassword(passwordEncoder.encode("password"));
            user_student3.setRole(Role.ROLE_STUDENT);

            User user_student4 = new User();
            user_student4.setEmail("student4@upt.ro");
            user_student4.setPassword(passwordEncoder.encode("password"));
            user_student4.setRole(Role.ROLE_STUDENT);

            User user_student5 = new User();
            user_student5.setEmail("student5@upt.ro");
            user_student5.setPassword(passwordEncoder.encode("password"));
            user_student5.setRole(Role.ROLE_STUDENT);

            User user_student6= new User();
            user_student6.setEmail("student6@upt.ro");
            user_student6.setPassword(passwordEncoder.encode("password"));
            user_student6.setRole(Role.ROLE_STUDENT);

            User user_student7 = new User();
            user_student7.setEmail("student7@upt.ro");
            user_student7.setPassword(passwordEncoder.encode("password"));
            user_student7.setRole(Role.ROLE_STUDENT);

            User user_student8 = new User();
            user_student8.setEmail("student8@upt.ro");
            user_student8.setPassword(passwordEncoder.encode("password"));
            user_student8.setRole(Role.ROLE_STUDENT);

            User user_student9 = new User();
            user_student9.setEmail("student9@upt.ro");
            user_student9.setPassword(passwordEncoder.encode("password"));
            user_student9.setRole(Role.ROLE_STUDENT);

            User user_student10 = new User();
            user_student10.setEmail("student10@upt.ro");
            user_student10.setPassword(passwordEncoder.encode("password"));
            user_student10.setRole(Role.ROLE_STUDENT);

            User user_student11 = new User();
            user_student11.setEmail("student11@upt.ro");
            user_student11.setPassword(passwordEncoder.encode("password"));
            user_student11.setRole(Role.ROLE_STUDENT);

            User user_student12 = new User();
            user_student12.setEmail("student12@upt.ro");
            user_student12.setPassword(passwordEncoder.encode("password"));
            user_student12.setRole(Role.ROLE_STUDENT);

            User user_teacher1 = new User();
            user_teacher1.setEmail("teacher1@upt.ro");
            user_teacher1.setPassword(passwordEncoder.encode("password"));
            user_teacher1.setRole(Role.ROLE_TEACHER);

            User user_teacher2 = new User();
            user_teacher2.setEmail("teacher2@upt.ro");
            user_teacher2.setPassword(passwordEncoder.encode("password"));
            user_teacher2.setRole(Role.ROLE_TEACHER);

            User user_teacher3 = new User();
            user_teacher3.setEmail("teacher3@upt.ro");
            user_teacher3.setPassword(passwordEncoder.encode("password"));
            user_teacher3.setRole(Role.ROLE_TEACHER);

            User user_teacher4 = new User();
            user_teacher4.setEmail("teacher4@upt.ro");
            user_teacher4.setPassword(passwordEncoder.encode("password"));
            user_teacher4.setRole(Role.ROLE_TEACHER);

            User user_teacher5 = new User();
            user_teacher5.setEmail("teacher5@upt.ro");
            user_teacher5.setPassword(passwordEncoder.encode("password"));
            user_teacher5.setRole(Role.ROLE_TEACHER);

            User user_teacher6 = new User();
            user_teacher6.setEmail("teacher6@upt.ro");
            user_teacher6.setPassword(passwordEncoder.encode("password"));
            user_teacher6.setRole(Role.ROLE_TEACHER);

            User user_teacher7 = new User();
            user_teacher7.setEmail("teacher7@upt.ro");
            user_teacher7.setPassword(passwordEncoder.encode("password"));
            user_teacher7.setRole(Role.ROLE_TEACHER);

            User user_admin = new User();
            user_admin.setEmail("admin@upt.ro");
            user_admin.setPassword(passwordEncoder.encode("password"));
            user_admin.setRole(Role.ROLE_ADMIN);

            repository.saveAll(
                    List.of(user_student1, user_student2, user_student3,
                            user_student4, user_student5, user_student6,
                            user_student7, user_student8, user_student9,
                            user_student10, user_student11, user_student12,
                            user_teacher1, user_teacher2, user_teacher3,
                            user_teacher4, user_teacher5, user_teacher6,
                            user_teacher7, user_admin)
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
            student1.setFirstName("Elena");
            student1.setLastName("Popescu");
            student1.setYear(1);
            student1.setUniversity(university1);

            Student student2 = new Student();
            student2.setFirstName("Andrei");
            student2.setLastName("Popescu");
            student2.setYear(1);
            student2.setUniversity(university2);

            Student student3 = new Student();
            student3.setFirstName("Mihai");
            student3.setLastName("Radu");
            student3.setYear(1);
            student3.setUniversity(university3);

            Student student4 = new Student();
            student4.setFirstName("Ana");
            student4.setLastName("Vasile");
            student4.setYear(2);
            student4.setUniversity(university2);

            Student student5 = new Student();
            student5.setFirstName("Victor");
            student5.setLastName("Stanescu");
            student5.setYear(2);
            student5.setUniversity(university5);

            Student student6 = new Student();
            student6.setFirstName("Ion");
            student6.setLastName("Stoica");
            student6.setYear(2);
            student6.setUniversity(university6);

            Student student7 = new Student();
            student7.setFirstName("Gabriela");
            student7.setLastName("Tudor");
            student7.setYear(1);
            student7.setUniversity(university1);

            Student student8 = new Student();
            student8.setFirstName("Alexandru");
            student8.setLastName("Gheorghiu");
            student8.setYear(2);
            student8.setUniversity(university2);

            Student student9 = new Student();
            student9.setFirstName("Ioana");
            student9.setLastName("Dobra");
            student9.setYear(1);
            student9.setUniversity(university7);

            Student student10 = new Student();
            student10.setFirstName("Florin");
            student10.setLastName("Manea");
            student10.setYear(1);
            student10.setUniversity(university8);

            Student student11 = new Student();
            student11.setFirstName("Adriana");
            student11.setLastName("Munteanu");
            student11.setYear(1);
            student11.setUniversity(university1);

            Student student12 = new Student();
            student12.setFirstName("Razvan");
            student12.setLastName("Enescu");
            student12.setYear(1);
            student12.setUniversity(university1);

            student1.setUser(user_student1);

            student2.setUser(user_student2);

            student3.setUser(user_student3);

            student4.setUser(user_student4);

            student5.setUser(user_student5);

            student6.setUser(user_student6);

            student7.setUser(user_student7);

            student8.setUser(user_student8);

            student9.setUser(user_student9);

            student10.setUser(user_student10);

            student11.setUser(user_student11);

            student12.setUser(user_student12);

            studentRepository.saveAll(List.of(student1, student2, student3, student4, student5,
                    student6, student7, student8, student9, student10, student11, student12));

            Course course1 = new Course();
            course1.setName("Footbal");
            course1.setScheduleColor("#003F88");

            Course course2 = new Course();
            course2.setName("Fitness");
            course2.setScheduleColor("#77166A");

            Course course3 = new Course();
            course3.setName("Culturism");
            course3.setScheduleColor("#BF3563");

            Course course4 = new Course();
            course4.setName("Inot");
            course4.setScheduleColor("#EE6F54");

            Course course5 = new Course();
            course5.setName("Baschet");
            course5.setScheduleColor("#FFB250");

            Course course6 = new Course();
            course6.setName("Jogging");
            course6.setScheduleColor("#F9F871");

            Course course7 = new Course();
            course7.setName("Gimnastica aerobica");
            course7.setScheduleColor("#8E1F23");

            Teacher teacher1 = new Teacher();
            teacher1.setFirstName("Andrei");
            teacher1.setLastName("Radu");
            teacher1.addUniversity(university1);
            teacher1.addUniversity(university2);

            Teacher teacher2 = new Teacher();
            teacher2.setFirstName("Maria");
            teacher2.setLastName("Stan");
            teacher2.addUniversity(university2);
            teacher2.addUniversity(university4);

            Teacher teacher3 = new Teacher();
            teacher3.setFirstName("Laura");
            teacher3.setLastName("Dumitru");
            teacher3.addUniversity(university3);
            teacher3.addUniversity(university4);

            Teacher teacher4 = new Teacher();
            teacher4.setFirstName("Alexandru");
            teacher4.setLastName("Diaconu");
            teacher4.addUniversity(university4);
            teacher4.addUniversity(university4);

            Teacher teacher5 = new Teacher();
            teacher5.setFirstName("Ion");
            teacher5.setLastName("Andreescu");
            teacher5.addUniversity(university5);
            teacher5.addUniversity(university4);

            Teacher teacher6 = new Teacher();
            teacher6.setFirstName("Adrian");
            teacher6.setLastName("Moldovan");
            teacher6.addUniversity(university6);
            teacher6.addUniversity(university4);

            Teacher teacher7 = new Teacher();
            teacher7.setFirstName("Mihaela");
            teacher7.setLastName("Gavrila");
            teacher7.addUniversity(university7);
            teacher7.addUniversity(university4);

            teacher1.setUser(user_teacher1);
            teacher2.setUser(user_teacher2);
            teacher1.addCourse(course1);
            teacher2.addCourse(course2);

            teacher3.setUser(user_teacher3);
            teacher4.setUser(user_teacher4);
            teacher3.addCourse(course3);
            teacher4.addCourse(course4);

            teacher5.setUser(user_teacher5);
            teacher6.setUser(user_teacher6);
            teacher5.addCourse(course5);
            teacher6.addCourse(course6);

            teacher7.setUser(user_teacher7);
            teacher7.addCourse(course7);

            teacherRepository.saveAll(List.of(teacher1, teacher2, teacher3, teacher4, teacher5, teacher6, teacher7));
            courseRepository.saveAll(List.of(course1, course2, course3, course4, course5, course6, course7));


            CourseLocation cl1 = new CourseLocation();
            cl1.setName("Baza 1");
            cl1.setAddress("Timişoara, 300223 Traian Lalescu nr. 2A");

            CourseLocation cl2 = new CourseLocation();
            cl2.setName("Baza 2");
            cl2.setAddress("Timişoara, 300586 Str. Păunescu Podeanu nr.2, (lângă Stadionul Dan Paltinişanu)");

            courseLocationRepository.saveAll(List.of(cl1, cl2));

        };
    }
}
