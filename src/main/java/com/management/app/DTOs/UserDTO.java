package com.management.app.DTOs;


public class UserDTO {

    private String email;
    private String  role;
    private BaseEntityDTO baseEntity;

    public UserDTO(String email, String role, BaseEntityDTO baseEntityDTO) {
        this.email = email;
        this.role = role;
        this.baseEntity = baseEntityDTO;
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

    public BaseEntityDTO getEntity() {
        return baseEntity;
    }

    public void setEntity(BaseEntityDTO entityId) {
        this.baseEntity = baseEntity;
    }
}
