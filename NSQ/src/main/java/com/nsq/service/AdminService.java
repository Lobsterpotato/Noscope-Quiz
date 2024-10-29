package com.nsq.service;

import com.nsq.model.Admin;
import com.nsq.repository.AdminRepository;
import org.springframework.stereotype.Service;

@Service
public class AdminService {
    private final AdminRepository adminRepository;

    public AdminService(AdminRepository adminRepository) {
        this.adminRepository = adminRepository;
    }
    public Admin getOneByUsernameAndPassword(String username, String password) {
        if (!isUsernameAndPasswordValid(username, password))
            throw new RuntimeException("Username ou mot de passe invalide");
        return adminRepository.findOneByUsernameAndPassword(username, password);
    }

    private boolean isUsernameAndPasswordValid(String username, String password) {
        return adminRepository.existsByUsernameAndPassword(username, password);
    }
}
