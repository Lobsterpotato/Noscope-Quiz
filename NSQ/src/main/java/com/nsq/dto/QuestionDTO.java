package com.nsq.dto;

import lombok.Data;

@Data
public class QuestionDTO {
    private String question;
    private String answer;
    private String option1;
    private String option2;
    private String option3;
    private Long idQuiz;
}
