package com.management.app.DTOs;


public class UserDTO {

    private String email;
    private String  role;
    private String entityId;

    public UserDTO(String email, String role, String entityId) {
        this.email = email;
        this.role = role;
        this.entityId = entityId;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public String getEntityId() {
        return entityId;
    }

    public void setEntityId(String entityId) {
        this.entityId = entityId;
    }
}
