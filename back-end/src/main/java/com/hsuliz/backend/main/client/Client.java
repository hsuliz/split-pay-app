package com.hsuliz.backend.main.client;

import com.hsuliz.backend.main.expence.Expense;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
@Setter
@Getter
@NoArgsConstructor
public class Client {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private String email;

    @OneToMany(mappedBy = "client", cascade = CascadeType.ALL)
    private Set<Expense> expenses = new HashSet<>();

    public Client(Long id, String name, String email) {
        this.id = id;
        this.name = name;
        this.email = email;
    }

    public Client(String name, String email) {
        this.name = name;
        this.email = email;
    }

}
