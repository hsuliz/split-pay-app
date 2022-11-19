package com.hsuliz.backend.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
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
    @JsonIgnoreProperties(value = {"expenses", "name", "email"})
    private Client client;

}