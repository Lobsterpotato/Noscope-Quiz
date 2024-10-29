import React, {useState} from 'react';
import ErrorMessageBalise from "../ErrorMessageBalise/ErrorMessageBalise";
import "./Question.css";
import {Button} from "@material-ui/core";
import {useHistory} from "react-router-dom/cjs/react-router-dom";

const Question = ({
                      currQues,
                      setCurrQues,
                      questions,
                      options,
                      answer,
                      score,
                      setScore,
                  }) => {
    const [selected, setSelected] = useState()
    const [error, setError] = useState(false);
    const history = useHistory();

    const handleSelect = (choix) => {
        if (selected === choix && selected === answer) {
            return "correct";
        } else if (selected === choix && selected !== answer) {
            return "wrong";
        } else if (choix === answer) {
            return "correct";
        }
    }

    const handleCheck = (choix) => {
        setSelected(choix);
        if (choix === answer)
            setScore(score + 1);
        setError(false);
    }

    const handleNext = () => {
        if (currQues >= questions.length - 1) {
            history.push({
                pathname: "/result",
                state: {score: score, nbQues: questions.length}
            })
        } else if (selected) {
            setCurrQues(currQues + 1);
            setSelected();
        } else {
            setError("Sélectionnez une réponse!");
        }
    }

    return (
        <div className='group'>
            <h2>Question : {currQues + 1}</h2>
            <div className="questionQuiz">
                <h3>{questions[currQues].question}</h3>
                {error && <ErrorMessageBalise>{error}</ErrorMessageBalise>}
                <div className='options'>
                    {
                        options.map((option) => <button onClick={() => handleCheck(option)}
                                                        className={`option ${selected && handleSelect(option)}`}
                                                        key={option}
                                                        disabled={selected}
                        > {option}</button>)
                    }
                </div>
                <div className={"buttons"}>
                    <Button variant="contained" href="/home">Quittez</Button>
                    <Button variant="contained" onClick={handleNext}>Prochaine Question</Button>
                </div>
            </div>
        </div>
    )
}

export default Question;