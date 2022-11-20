package com.hsuliz.backend;

import com.hsuliz.backend.repository.ClientRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
@Slf4j
public class JpaUserDetailsService implements UserDetailsService {

    private final ClientRepository userRepository;

    public JpaUserDetailsService(ClientRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return userRepository
                .findByEmail(username)
                .map(SecurityUser::new)
                .orElseThrow(() -> {
                    log.info("Username not found: " + username);
                    return new UsernameNotFoundException("Username not found: " + username);
                });
    }

}
