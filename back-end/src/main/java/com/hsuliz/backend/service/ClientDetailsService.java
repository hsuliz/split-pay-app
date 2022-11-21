package com.hsuliz.backend.service;

import com.hsuliz.backend.model.ClientDetails;
import com.hsuliz.backend.repository.ClientRepository;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
@Slf4j
@AllArgsConstructor
public class ClientDetailsService implements UserDetailsService {

    private final ClientRepository userRepository;


    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return userRepository
                .findByEmail(username)
                .map(ClientDetails::new)
                .orElseThrow(() -> {
                    log.info("Username not found: " + username);
                    return new UsernameNotFoundException("Username not found: " + username);
                });
    }

}
