package com.nsq.controller;

import com.nsq.dto.ResponseMessage;
import com.nsq.model.Player;
import com.nsq.service.PlayerService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/player")
public class PlayerController {
    private final PlayerService playerService;

    public PlayerController(PlayerService playerService) {
        this.playerService = playerService;
    }

    @PostMapping("/signup")
    public ResponseEntity<?> signup(@RequestBody Player player) {
        Player createdPlayer;
        try {
            createdPlayer = playerService.create(player);
        } catch (Exception e) {
            return ResponseEntity
                    .badRequest()
                    .body(new ResponseMessage("Erreur lors de la création du joueur"));
        }
        return ResponseEntity.status(HttpStatus.CREATED).body(createdPlayer);
    }

    @GetMapping("/login/{username}/{password}")
    public ResponseEntity<?> login(@PathVariable String username, @PathVariable String password) {
        Player player;
        try {
            player = playerService.getOneByEmailAndPassword(username, password);
            return ResponseEntity.ok(player);
        } catch (Exception e) {
            return ResponseEntity
                    .badRequest()
                    .body(new ResponseMessage("Erreur lors de la connexion du joueur"));
        }
    }

    @GetMapping("/{username}")
    public ResponseEntity<?> getOneByUsername(@PathVariable String username) {
        Player player;
        try {
            player = playerService.getOneByUsername(username);
            return ResponseEntity.ok(player);
        } catch (Exception e) {
            return ResponseEntity
                    .badRequest()
                    .body(new ResponseMessage("Erreur lors de la récupération du joueur"));
        }
    }

    @GetMapping("/get_role/{username}")
    public ResponseEntity<?> getRoleByUsername(@PathVariable String username) {
        boolean isAdmin;
        try {
            isAdmin = playerService.isUserAdmin(username);
            return ResponseEntity.ok(isAdmin);
        } catch (Exception e) {
            return ResponseEntity
                    .badRequest()
                    .body(new ResponseMessage("Erreur lors de la récupération du rôle du joueur"));
        }
    }

    @GetMapping("/liste_joueurs")
    public ResponseEntity<?> getAllJoueurs() {
        List<Player> playerList = playerService.getAllJoueurs();
        return ResponseEntity.ok(playerList);
    }

    @PostMapping("/update_score/{username}")
    public ResponseEntity<?> updateScore(@PathVariable String username) {
        Player player;
        try {
            player = playerService.updateScore(username);
            return ResponseEntity.ok(player);
        } catch (Exception e) {
            return ResponseEntity
                    .badRequest()
                    .body(new ResponseMessage("Erreur lors de la mise à jour du score du joueur"));
        }
    }
}
