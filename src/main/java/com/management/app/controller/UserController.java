package com.management.app.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "/api")
public class UserController {

    @GetMapping("/public")
    public ResponseEntity<String> publicEndpoint() {
        return ResponseEntity.ok("This is a public endpoint. No auth required");
    }

    @GetMapping("/private")
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public ResponseEntity<String> privateEndpoint() {
        return ResponseEntity.ok("This is a private endpoint. Requires 'USER' role.");
    }
}
