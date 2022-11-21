package com.hsuliz.backend.controller;

import com.hsuliz.backend.model.LoginRequest;
import com.hsuliz.backend.service.ClientAuthService;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.AuthenticationException;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/auth")
@AllArgsConstructor
@Slf4j
public class AuthController {

    private final ClientAuthService clientAuthService;

    @PostMapping("/login")
    public String login(@RequestBody LoginRequest clientLogin) throws AuthenticationException {
        return clientAuthService.authenticate(clientLogin);
    }

    @PostMapping("/register")
    public String register(@RequestBody LoginRequest userLogin) throws AuthenticationException {
        return clientAuthService.register(userLogin);
    }

}
