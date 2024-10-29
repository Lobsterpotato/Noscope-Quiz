package com.nsq.controller;

import com.nsq.model.Quiz;
import com.nsq.service.QuizService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/quiz")
public class QuizController {

    private final QuizService quizService;

    public QuizController(QuizService quizService) {
        this.quizService = quizService;
    }

    @PostMapping("/ajouter_quiz")
    public ResponseEntity<?> creeQuiz(@RequestBody Quiz quiz) {
        Quiz quizCree;
        try {
            quizCree = quizService.creeQuiz(quiz);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
        return ResponseEntity.ok(quizCree);
    }

    @GetMapping("/liste_quiz")
    public ResponseEntity<?> getListeQuiz() {
        List<Quiz> listeQuiz = quizService.getListeQuiz();
        return ResponseEntity.ok(listeQuiz);
    }

    @PostMapping("/delete_quiz/{id}")
    public ResponseEntity<?> deleteQuiz(@PathVariable Long id) {
        quizService.deleteQuiz(id);
        return ResponseEntity.ok("Quiz supprimé");
    }

    @GetMapping("/liste_questions/{id}")
    public ResponseEntity<?> getAllQuestions(@PathVariable Long id) {
        return ResponseEntity.ok(quizService.getAllQuestions(id));
    }
}
