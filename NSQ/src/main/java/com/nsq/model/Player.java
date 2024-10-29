package com.nsq.model;

import lombok.Data;

import javax.persistence.Entity;

@Data
@Entity
public class Player extends User {
    private int quizCount;

}
