import React, {useEffect, useState} from "react";
import {useHistory} from "react-router-dom/cjs/react-router-dom";
import "./Quiz.css";
import Question from "../Question/Question";

const Quiz = () => {
    const history = useHistory();
    const [options, setOptions] = useState([]);
    const [currQues, setCurrQues] = useState(0);
    const [score, setScore] = useState(0);

    let listQuestion;
    let quizState;

    quizState = history.location.state.quiz;
    listQuestion = quizState.questionsList;

    useEffect(() => {
        setOptions(quizState.questionsList &&
            mix([quizState.questionsList[currQues].option1,
                quizState.questionsList[currQues].option2,
                quizState.questionsList[currQues].option3,
                quizState.questionsList[currQues].answer]));
    }, [quizState.questionsList, currQues]);

    const mix = (reponses) => {
        return reponses.sort(() => Math.random() - 0.5);
    };

    return (
        <div className='quiz'>
            <span className="title">{quizState.titre}</span>
            {(
                <>
                    <div className="quizInfo">
                        <span>Categorie: {quizState.categorie}</span>
                        <span>Score: {score}</span>
                    </div>
                    <Question
                        currQues={currQues}
                        setCurrQues={setCurrQues}
                        questions={listQuestion}
                        options={options}
                        answer={listQuestion[currQues].answer}
                        score={score}
                        setScore={setScore}
                    />
                </>
            )
            }
        </div>
    );
};

export default Quiz;