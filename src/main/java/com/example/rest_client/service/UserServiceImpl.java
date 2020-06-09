package com.example.rest_client.service;

import com.example.rest_client.model.User;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import java.util.List;

@Service
public class UserServiceImpl implements UserService {

    private final RestTemplate restTemplate;
    private final String baseURL = "http://localhost:8083/api/user/";

    public UserServiceImpl(RestTemplateBuilder restTemplateBuilder) {
        this.restTemplate = restTemplateBuilder.basicAuthentication("user", "password").build();
    }

    @Override
    public User getUserByEmail (String email) {
        ResponseEntity<User> responseEntity = restTemplate.getForEntity(baseURL + email, User.class);
        return responseEntity.getBody();
    }
    @Override
    public List<User> getAllUsers () {
       return  restTemplate.getForEntity(baseURL + "allUsers", List.class).getBody();
    }
    @Override
    public User addUser (User user) {
        HttpEntity<User> request = new HttpEntity<>(user);
        return  restTemplate.postForObject(baseURL + "newUser", request, User.class) ;
    }

    @Override
    public void deleteUser (User user) {
        HttpEntity<User> request = new HttpEntity<>(user);
        restTemplate.postForEntity(baseURL + "delete", request, User.class);
    }

    @Override
    public User updateUser (User user) {
        HttpEntity<User> request = new HttpEntity<>(user);
        return restTemplate.postForObject(baseURL + "updateUser", request, User.class);
    }

}
