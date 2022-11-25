package com.hsuliz.backend.exception;

public class ClientNotFoundException extends RuntimeException {

    public ClientNotFoundException(String client) {
        super("Couldn't find: " + client);
    }

}