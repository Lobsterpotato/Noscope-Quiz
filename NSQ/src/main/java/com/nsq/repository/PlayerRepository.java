package com.nsq.repository;

import com.nsq.model.Player;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PlayerRepository extends JpaRepository<Player, Long> {
    Player findOneByUsernameAndPassword(String username, String password);

    boolean existsByUsernameAndPassword(String username, String password);

    boolean existsByUsername(String username);

    Player findOneByUsername(String username);

    String findRoleByUsername(String username);
}
