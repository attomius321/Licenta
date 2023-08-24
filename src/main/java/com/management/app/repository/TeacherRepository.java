package com.management.app.repository;

import com.management.app.model.Teacher;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
public interface TeacherRepository extends JpaRepository<Teacher, UUID> {
    List<Teacher> findByCourses_Id(UUID id);
}