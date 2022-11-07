package com.hsuliz.backend.client.exception;

public class ClientNotFoundException extends RuntimeException {
    public ClientNotFoundException(long clientId) {
        super("Client not found on :: " + clientId);
    }
}
