import React, {useEffect, useState} from 'react';
import {useHistory} from "react-router-dom/cjs/react-router-dom";
import Typography from "@material-ui/core/Typography";
import {IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {Stack} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Swal from "sweetalert2";
import {methods, requestInit, urlBackend} from "../../service/serviceUtils";

const useStyles = makeStyles({
    table: {
        marginTop: 20,
        paddingRight: 20,
        paddingLeft: 20,
    },
});

const ListeQuestions = () => {
    const classes = useStyles();
    const history = useHistory();
    const [questions, setQuestions] = useState([]);
    const [titre, setTitre] = useState("");
    const getQuestions = async (id) => {
        const response = await fetch(`${urlBackend}/quiz/liste_questions/${id}`);
        return await response.json();
    };

    useEffect(() => {
        let quizState;
        quizState = history.location.state.quiz;
        setTitre(quizState.titre);
        getQuestions(quizState.idQuiz).then(data => {
            setQuestions(data);
        });
    }, [questions]);


    const deleteQuestion = async (id) => {
        Swal.fire({
            title: 'Vous êtes sûr de supprimer cette question?',
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
                    'La question a été supprimé.',
                    'success'
                ).then(async () => {
                });
                return (await fetch(`${urlBackend}/question/delete_question/${id}`, requestInit(methods.POST, id)));
            }
        })
    }

    if (questions.length === 0) {
        return (
            <div>
                <Typography variant="h4" gutterBottom component="div" style={{textAlign: "center"}}
                            className={"text-center mt-5 fst-italic text-decoration-underline"}>
                    Aucune question n'est associée à ce quiz, ajoutez-en une pour pouvoir la modifier !
                </Typography>
            </div>
        );
    }

    return (
        <div style={{height: 300, width: '85%', margin: 'auto', marginTop: '35px'}}>
            <Typography variant="h4" gutterBottom component="div" style={{textAlign: "center"}}
                        className={"text-center my-3 fst-italic text-decoration-underline"}>
                Liste des questions du quiz: {titre}
            </Typography>
            <div style={{paddingBottom: '45px'}}>
                <TableContainer component={Paper}>
                    <Table className={classes.table} size="small">
                        <TableHead>
                            <TableRow>
                                <TableCell>ID</TableCell>
                                <TableCell>Question</TableCell>
                                <TableCell>Bonne réponse</TableCell>
                                <TableCell>1èr choix</TableCell>
                                <TableCell>2ème choix</TableCell>
                                <TableCell>3ème choix</TableCell>
                                <TableCell>Options</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {questions.map((question) => (
                                <TableRow key={question.idQuestion} style={{textTransform: "capitalize"}}>
                                    <TableCell component="th" scope="row">{question.idQuestion}</TableCell>
                                    <TableCell>
                                        {question.question}
                                    </TableCell>
                                    <TableCell>
                                        {question.answer}
                                    </TableCell>
                                    <TableCell>
                                        {question.option1}
                                    </TableCell>
                                    <TableCell>
                                        {question.option2}
                                    </TableCell>
                                    <TableCell>
                                        {question.option3}
                                    </TableCell>
                                    <TableCell>
                                        <Stack direction="row" spacing={1}>
                                            <IconButton aria-label="Modifier" color="primary"
                                                        onClick={() => history.push({
                                                            pathname: "/modifer_question",
                                                            state: {question: question}
                                                        })}>
                                                <EditIcon/>
                                            </IconButton>
                                            <IconButton aria-label="Supprimer" color={"secondary"}
                                                        onClick={() => deleteQuestion(question.idQuestion)}>
                                                <DeleteIcon/>
                                            </IconButton>
                                        </Stack>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    );
}

export default ListeQuestions;