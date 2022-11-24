package com.hsuliz.backend.service.client;

import com.hsuliz.backend.entity.Client;
import com.hsuliz.backend.model.LoginRequest;
import com.hsuliz.backend.repository.ClientRepository;
import com.hsuliz.backend.service.TokenService;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
@Slf4j
public class ClientAuthService {

    private final ClientRepository clientRepository;

    private final TokenService tokenService;

    private final AuthenticationManager authenticationManager;

    private final PasswordEncoder passwordEncoder;


    public String authenticate(LoginRequest clientLogin) {
        Authentication authentication = authenticationManager
                .authenticate(new UsernamePasswordAuthenticationToken(
                        clientLogin.username(),
                        clientLogin.password()));
        log.info("Access granted!!");
        return tokenService.generateToken(authentication);
    }

    public String register(LoginRequest userLogin) {
        String encodedPass = passwordEncoder.encode(userLogin.password());
        var client = new Client(
                userLogin.username(),
                encodedPass
        );
        clientRepository.save(client);
        return "User created!!";
    }

}
