package com.nsq.repository;

import com.nsq.model.Admin;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AdminRepository extends JpaRepository<Admin, Long> {
    Admin findOneByUsernameAndPassword(String username, String password);

    boolean existsByUsernameAndPassword(String username, String password);
}
