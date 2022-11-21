package com.hsuliz.backend.controller;

import com.hsuliz.backend.entity.Client;
import com.hsuliz.backend.model.LoginRequest;
import com.hsuliz.backend.repository.ClientRepository;
import com.hsuliz.backend.service.TokenService;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;

@RestController
@RequestMapping("/auth")
@AllArgsConstructor
@Slf4j
public class AuthController {

    private final ClientRepository clientRepository;

    private final TokenService tokenService;

    private final AuthenticationManager authenticationManager;

    private final PasswordEncoder passwordEncoder;


    @PostMapping("/login")
    public String login(@RequestBody LoginRequest clientLogin) throws AuthenticationException {
        Authentication authentication = authenticationManager
                .authenticate(new UsernamePasswordAuthenticationToken(
                        clientLogin.username(),
                        clientLogin.password()));
        log.info("Access granted!!");
        return tokenService.generateToken(authentication);
    }

    @PostMapping("/register")
    public String register(@RequestBody LoginRequest userLogin) throws AuthenticationException {
        String encodedPass = passwordEncoder.encode(userLogin.password());
        var client = new Client(
                userLogin.username(),
                encodedPass
        );
        clientRepository.save(client);
        return "User created!!";
    }

}
