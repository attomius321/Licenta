package com.management.app.security.service;

import com.management.app.security.dao.request.SignUpRequest;
import com.management.app.security.dao.request.SigninRequest;
import com.management.app.security.dao.response.JwtAuthenticationResponse;

public interface AuthenticationService {
    JwtAuthenticationResponse signup(SignUpRequest request);

    JwtAuthenticationResponse signin(SigninRequest request);
}
