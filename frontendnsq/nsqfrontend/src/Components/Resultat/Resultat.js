import {Button} from "@material-ui/core";
import "./Resultat.css";
import {useHistory} from "react-router-dom/cjs/react-router-dom";
import React from "react";

const Resultat = () => {
    const history = useHistory();
    const score = history.location.state.score;
    const nbQues = history.location.state.nbQues;
    const name = localStorage.getItem('player');
    const scoreFinal = Number(score) / Number(nbQues) * 100;

    return (
        <div className="result">
            <span className="title">Score final: {score} / {nbQues}</span>
            {scoreFinal >= 50 ?
                <h5>Bravo! {name}</h5> :
                <h5>Dommage {name}, tu n'as pas la moyenne, meilleur chance la prochaine fois! </h5>}
            <div className={"d-flex justify-content-center mt-2"}>
                <Button
                    variant="contained"
                    href="/home">
                    Revenir au menu
                </Button>
            </div>
        </div>
    );
};

export default Resultat;