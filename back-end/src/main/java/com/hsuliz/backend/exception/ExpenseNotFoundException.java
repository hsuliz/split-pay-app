package com.hsuliz.backend.exception;

public class ExpenseNotFoundException extends RuntimeException {

    public ExpenseNotFoundException(String client) {
        super("Couldn't find expenses for" + client);
    }

}
