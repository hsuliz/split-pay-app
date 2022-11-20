package com.hsuliz.backend.controller;

import com.hsuliz.backend.entity.Client;
import com.hsuliz.backend.model.LoginRequest;
import com.hsuliz.backend.repository.ClientRepository;
import com.hsuliz.backend.service.TokenService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AuthController {

    private static final Logger LOG = LoggerFactory.getLogger(AuthController.class);

    private final ClientRepository clientRepository;

    private final TokenService tokenService;
    private final AuthenticationManager authenticationManager;

    private final PasswordEncoder passwordEncoder;

    public AuthController(ClientRepository clientRepository, TokenService tokenService, AuthenticationManager authenticationManager,
                          PasswordEncoder passwordEncoder) {
        this.clientRepository = clientRepository;
        this.tokenService = tokenService;
        this.authenticationManager = authenticationManager;
        this.passwordEncoder = passwordEncoder;
    }

    @PostMapping("/token")
    public String token(@RequestBody LoginRequest userLogin) throws AuthenticationException {
        Authentication authentication = authenticationManager
                .authenticate(new UsernamePasswordAuthenticationToken(
                        userLogin.username(),
                        userLogin.password()));
        LOG.info("Acces granted!!");
        return tokenService.generateToken(authentication);
    }

    @PostMapping("/reg")
    public String log(@RequestBody LoginRequest userLogin) throws AuthenticationException {
        String encodedPass = passwordEncoder.encode(userLogin.password());
        var client = new Client(userLogin.username(), encodedPass);
        client = clientRepository.save(client);
        return "User created!!";
    }


}
