package kr.ac.ajou.security.capstone5.cybermonitorassistant.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Date;

@RestController
public class MainController {

    @GetMapping("/api/main")
    public String main() {
        return new Date().toString();
    }
}
