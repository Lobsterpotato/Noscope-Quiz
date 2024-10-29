class User{
    id = null;
    username = null;
    password = null;
    quizCount = 0;
    role = "";

    constructor(id, username, password, role, quizCount){
        this.id = id;
        this.username = username;
        this.password = password;
        this.role = "Joueur";
        this.quizCount = quizCount;
    }
}

export class PlayerModel extends User{
    score = 0;
    constructor(id, username, password, score){
        super(id, username, password);
        this.score = score;
    }
}

export class AdminModel extends User{
    constructor(id, username, password){
        super(id, username, password);
    }
}