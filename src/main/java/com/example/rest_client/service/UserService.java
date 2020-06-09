package com.example.rest_client.service;

import com.example.rest_client.model.User;

import java.util.List;

public interface UserService {
    List<User> getAllUsers ();
    void deleteUser (User user);
    User updateUser (User user);
    User addUser (User user);
    User getUserByEmail (String email);
}
