package com.hsuliz.backend.main.client.exception;

public class ClientNotFoundException extends RuntimeException {
    public ClientNotFoundException(long clientId) {
        super("Client by id not found on : " + clientId);
    }
}
