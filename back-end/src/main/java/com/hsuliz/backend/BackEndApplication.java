package com.hsuliz.backend;

import com.hsuliz.backend.entity.Client;
import com.hsuliz.backend.entity.Expense;
import com.hsuliz.backend.repository.ClientRepository;
import com.hsuliz.backend.repository.ExpenseRepository;
import lombok.val;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.List;

@SpringBootApplication
public class BackEndApplication {

    public static void main(String[] args) {
        SpringApplication.run(BackEndApplication.class, args);
    }


    @Bean
    CommandLineRunner commandLineRunner(ClientRepository clientRepository,
                                        ExpenseRepository expenseRepository,
                                        PasswordEncoder encoder) {
        return args -> {
            val client = new Client("test", encoder.encode("test"));
            clientRepository.save(client);
            expenseRepository.saveAll(List.of(
                    new Expense("Bread", 3F, client),
                    new Expense("Fish", 5F, client)
            ));
        };
    }

}
