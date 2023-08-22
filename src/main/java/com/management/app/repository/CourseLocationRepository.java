package com.management.app.repository;

import com.management.app.model.CourseLocation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Set;
import java.util.UUID;

@Repository
public interface CourseLocationRepository extends JpaRepository<CourseLocation, UUID> {
}