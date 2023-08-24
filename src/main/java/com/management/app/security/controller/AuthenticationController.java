package com.management.app.security.controller;

import com.management.app.DTOs.UserDTO;
import com.management.app.security.controller.dtos.SignInResponse;
import com.management.app.security.dao.request.SignUpRequest;
import com.management.app.security.dao.request.SigninRequest;
import com.management.app.security.dao.response.JwtAuthenticationResponse;
import com.management.app.security.entities.User;
import com.management.app.security.repository.UserRepository;
import com.management.app.security.service.AuthenticationService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import lombok.RequiredArgsConstructor;

import java.util.UUID;

@RestController
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
public class AuthenticationController {
    private final AuthenticationService authenticationService;
    private final UserRepository userRepository;

    @PostMapping("/signup")
    public ResponseEntity<JwtAuthenticationResponse> signup(@RequestBody SignUpRequest request) {
        return ResponseEntity.ok(authenticationService.signup(request));
    }

    @PostMapping("/signin")
    public ResponseEntity<SignInResponse> signin(@RequestBody SigninRequest request) {
        User user = userRepository.findByEmail(request.getEmail())
                .orElseThrow(() -> new IllegalArgumentException("Invalid email or password."));
        UUID studentId = (user.getStudent() != null) ? user.getStudent().getId() : null;
        UUID teacherId = (user.getTeacher() != null) ? user.getTeacher().getId() : null;

        SignInResponse signInResponse = new SignInResponse(authenticationService.signin(request), new UserDTO(user.getEmail(), user.getRole().toString(),
                (studentId != null) ? studentId.toString() : (teacherId != null) ? teacherId.toString() : null));
        return ResponseEntity.ok(signInResponse);
    }
}
