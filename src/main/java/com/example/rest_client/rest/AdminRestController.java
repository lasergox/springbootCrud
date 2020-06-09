package com.example.rest_client.rest;

import com.example.rest_client.model.User;
import com.example.rest_client.service.UserServiceImpl;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/admin/")
public class AdminRestController {

    private UserServiceImpl userService;

    private AdminRestController(UserServiceImpl userService) {
        this.userService = userService;
    }

    @GetMapping("allUsers")
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }

    @PostMapping("delete")
    public void deleteUser(@RequestBody User user) {
        userService.deleteUser(user);
    }

    @PostMapping("add")
    public User addUser (@RequestBody User user) {
        return userService.addUser(user);
    }

    @PostMapping("update")
    public User updateUser (@RequestBody User user) {
        return userService.updateUser(user);
    }


}
