import React, {useEffect, useState} from "react";
import QuizView from "../QuizView/QuizView";
import {urlBackend} from "../../service/serviceUtils";
import {Grid} from "@material-ui/core";


export default function Home() {
    const [quiz, setQuiz] = useState([]);

    const getAllQuiz = async () => {
        const response = await fetch(`${urlBackend}/quiz/liste_quiz`);
        return await response.json();
    };

    useEffect(() => {
        getAllQuiz().then(data => {
            setQuiz(data);
        });
    }, []);

    if (quiz.length === 0) {
        return <div>
            <h2 className={"text-center mt-3 fst-italic text-decoration-underline"}>Aucun Quiz n'est disponible pour le
                moment</h2>
        </div>;
    }

    return (
        <div>
            <h2 className={"text-center mt-3 fst-italic text-decoration-underline"}>Liste des Quiz</h2>
            <Grid container spacing={1} className={"d-flex justify-content-around mt-5"}>
                {quiz.map(quiz => (
                    <Grid item key={quiz.id} md={4} className={"mx-3 mt-3"}>
                        <QuizView quiz={quiz}/>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}