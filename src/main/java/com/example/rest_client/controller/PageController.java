package com.example.rest_client.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class PageController {

    @GetMapping("/login")
    public String getLoginPage() {
        return "login";
    }

    @GetMapping(value = "/user")
    public String getUserPage () {
        return "account";
    }

    @GetMapping(value = "/admin")
    public String getAdminPage () {
        return "admin";
    }
}
