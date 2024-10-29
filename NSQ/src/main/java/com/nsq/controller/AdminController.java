package com.nsq.controller;

import com.nsq.dto.ResponseMessage;
import com.nsq.model.Admin;
import com.nsq.service.AdminService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/admin")
public class AdminController {

    private final AdminService adminService;

    public AdminController(AdminService adminService) {
        this.adminService = adminService;
    }

    @GetMapping("/login/{username}/{password}")
    public ResponseEntity<?> login(@PathVariable String username, @PathVariable String password) {
        try {
            Admin admin = adminService.getOneByUsernameAndPassword(username, password);
            return ResponseEntity.ok(admin);
        } catch (Exception e) {
            return ResponseEntity
                    .badRequest()
                    .body(new ResponseMessage("Erreur lors de la connexion"));
        }
    }

}
