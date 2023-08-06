package com.management.app.repository;

import com.management.app.model.CourseSchedule;
import com.management.app.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Set;
import java.util.UUID;

@Repository
public interface CourseScheduleRepository extends JpaRepository<CourseSchedule, UUID> {
}
