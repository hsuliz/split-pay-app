package com.hsuliz.backend.controller;

import com.hsuliz.backend.model.LoginRequest;
import com.hsuliz.backend.service.client.ClientAuthService;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.AuthenticationException;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
@AllArgsConstructor
@Slf4j
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class ClientAuthController {

    private final ClientAuthService clientAuthService;


    @PostMapping("/signin")
    public String login(@RequestBody LoginRequest clientLogin) throws AuthenticationException {
        return clientAuthService.authenticate(clientLogin);
    }

    @PostMapping("/signup")
    public String register(@RequestBody LoginRequest userLogin) throws AuthenticationException {
        return clientAuthService.register(userLogin);
    }

}
