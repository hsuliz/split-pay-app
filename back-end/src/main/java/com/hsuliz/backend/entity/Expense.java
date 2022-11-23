package com.hsuliz.backend.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.DecimalMin;
import javax.validation.constraints.NotEmpty;

@Entity
@Setter
@Getter
@NoArgsConstructor
@JsonIgnoreProperties({"hibernateLazyInitializer"})
@ApiModel(description = "All details about the expense.")
public class Expense {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @JsonProperty(access = JsonProperty.Access.READ_ONLY)
    private Long id;

    @ApiModelProperty(notes = "Name shouldn't be empty")
    @NotEmpty
    private String name;

    @ApiModelProperty(notes = "Price shouldn't be empty")
    @DecimalMin(value = "0")
    private Float price;

    @ApiModelProperty(notes = "Client who paid")
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "client_id")
    @JsonIgnore
    //@JsonIgnoreProperties(value = {"expenses", "name", "username"})
    //@JsonProperty(access = JsonProperty.Access.READ_ONLY)
    private Client client;

    public Expense(String name, Float price, Client client) {
        this.name = name;
        this.price = price;
        this.client = client;
    }
}