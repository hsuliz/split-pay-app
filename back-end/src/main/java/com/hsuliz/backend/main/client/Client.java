package com.hsuliz.backend.main.client;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.hsuliz.backend.main.expence.Expense;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import java.util.HashSet;
import java.util.Set;

@Entity
@Setter
@Getter
@NoArgsConstructor
@JsonIgnoreProperties({"hibernateLazyInitializer"})
@ApiModel(description = "All details about the client.")
public class Client {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ApiModelProperty(notes = "Name shouldn't be empty")
    @NotEmpty
    private String name;

    @ApiModelProperty(notes = "Email shouldn't be empty")
    @NotEmpty
    private String email;

    @ApiModelProperty(notes = "Client expenses")
    @OneToMany(mappedBy = "client", cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    //@JsonProperty(access = JsonProperty.Access.READ_ONLY)
    @JsonIgnoreProperties(value = {"client"})
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
