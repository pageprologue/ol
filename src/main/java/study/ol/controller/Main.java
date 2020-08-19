package study.ol.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class Main {
    
    @GetMapping("/")
    public String main() {

        return "index";
    }
}