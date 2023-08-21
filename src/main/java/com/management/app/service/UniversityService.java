package com.management.app.service;

import com.management.app.DTOs.UniversityDTO;
import com.management.app.model.University;
import com.management.app.repository.UniversityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class UniversityService {

    private final UniversityRepository universityRepository;

    @Autowired
    public UniversityService(UniversityRepository universityRepository) {
        this.universityRepository = universityRepository;
    }
    public List<UniversityDTO> getUniversities() {
        List<University> universities = universityRepository.findAll();
        List<UniversityDTO> universityDTOS =
                universities.stream()
                        .map(university -> new UniversityDTO(university.getId().toString(), university.getName(), university.getAddress()))
                        .collect(Collectors.toList());
        return universityDTOS;
    }
}
