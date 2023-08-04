package com.management.app.repository;

import com.management.app.model.CourseLocation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CourseLocationRepository extends JpaRepository<CourseLocation, Long> {
}