import React, {useEffect} from 'react';
import styles from "./QuizView.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from "@material-ui/core";
import {useHistory} from "react-router-dom/cjs/react-router-dom";
import {methods, requestInit, urlBackend} from "../../service/serviceUtils";
import DeleteIcon from '@mui/icons-material/Delete';
import SettingsIcon from '@mui/icons-material/Settings';
import AddIcon from '@mui/icons-material/Add';
import Swal from "sweetalert2";

export default function QuizView(props) {
    const [role, setRole] = React.useState("");
    const user = localStorage.getItem('player');
    if (user) {
        const getRole = async () => {
            const response = await fetch(`${urlBackend}/player/${user}`);
            return await response.json();
        }
        useEffect(() => {
            getRole().then(data => {
                setRole(data.role);
            });
        }, []);
    }

    const {quiz} = props;
    const history = useHistory();
    const updateScore = async (player) => {
        return (await fetch(`${urlBackend}/player/update_score/${user}`, requestInit(methods.POST, player)))
    }

    const deleteQuiz = async (id) => {
        Swal.fire({
            title: 'Vous êtes sûr de supprimer ce Quiz?',
            text: "Vous ne pourrez pas revenir en arrière!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: 'burlywood',
            cancelButtonColor: 'red',
            confirmButtonText: 'Oui, supprimer!',
            cancelButtonText: 'Annuler'
        }).then(async (result) => {
            if (result.isConfirmed) {
                await Swal.fire(
                    'Supprimé!',
                    'Le quiz a été supprimé.',
                    'success'
                ).then(async () => {
                    window.location.reload();
                });
                return (await fetch(`${urlBackend}/quiz/delete_quiz/${id}`, requestInit(methods.POST, id)));
            }
        })
    }

    return (
        <div className={styles.cardHolder}>
            <div className="card">
                <div className="card-body">
                    <h4 className={`d-flex justify-content-around`}>
                        {quiz.titre}
                    </h4>
                    <div className="d-flex justify-content-around">
                        <p>
                            Difficulté: {quiz.difficulte}
                        </p>
                        <p>
                            Catégorie: {quiz.categorie}
                        </p>
                        <p>
                            Nb de questions: {quiz.questionsList.length}
                        </p>
                    </div>
                    <div className={`d-flex justify-content-around ${styles.quizDescription}`}>
                        <i> {quiz.description}</i>
                    </div>
                    <div className={"d-flex justify-content-center mt-2"}>
                        {role === "admin" || <div onClick={() => updateScore(user)}>
                            <Button variant="contained"
                                    onClick={() => history.push({
                                        pathname: "/quiz",
                                        state: {quiz: quiz}
                                    })}>
                                Commencer le quiz
                            </Button>
                        </div>
                        }
                        {role !== "admin" || <>
                            <Button variant="outlined" endIcon={<AddIcon/>} style={{"marginRight": "5px"}}
                                    onClick={() => history.push({
                                        pathname: "/ajouter_question",
                                        state: {quiz: quiz}
                                    })}>
                                Ajouter une question
                            </Button>

                            <Button variant="outlined" endIcon={<SettingsIcon/>} style={{"marginRight": "5px"}}
                                    onClick={() => history.push({
                                        pathname: "/liste_questions",
                                        state: {quiz: quiz}
                                    })}>
                                Liste des questions
                            </Button>

                            <Button variant="outlined" endIcon={<DeleteIcon/>}
                                    onClick={() => deleteQuiz(quiz.idQuiz)}>
                                Supprimer le quiz
                            </Button>
                        </>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}