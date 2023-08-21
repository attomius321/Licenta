package com.management.app.security.controller.dtos;

import com.management.app.DTOs.UserDTO;
import com.management.app.security.dao.response.JwtAuthenticationResponse;

public class SignInResponse {
    private JwtAuthenticationResponse jwtAuthenticationResponse;

    private UserDTO user;

    public SignInResponse(JwtAuthenticationResponse jwtAuthenticationResponse, UserDTO user) {
        this.jwtAuthenticationResponse = jwtAuthenticationResponse;
        this.user = user;
    }

    public JwtAuthenticationResponse getJwtAuthenticationResponse() {
        return jwtAuthenticationResponse;
    }

    public void setJwtAuthenticationResponse(JwtAuthenticationResponse jwtAuthenticationResponse) {
        this.jwtAuthenticationResponse = jwtAuthenticationResponse;
    }

    public UserDTO getUser() {
        return user;
    }

    public void setUser(UserDTO user) {
        this.user = user;
    }
}
