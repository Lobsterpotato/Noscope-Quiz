import React, {useState} from 'react';
import {useHistory} from "react-router-dom/cjs/react-router-dom";
import {TextField} from "@material-ui/core";
import {Button} from "@mui/material";
import ErrorMessageBalise from "../ErrorMessageBalise/ErrorMessageBalise";
import {makeStyles} from "@material-ui/core/styles";
import AddIcon from '@mui/icons-material/Add';
import {methods, requestInit, urlBackend} from "../../service/serviceUtils";
import Swal from "sweetalert2";

const AjoutQuestion = () => {
    const history = useHistory();
    let quizState;
    quizState = history.location.state.quiz;

    const [values, setValues] = useState({
        question: '',
        option1: '',
        option2: '',
        option3: '',
        answer: '',
        idQuiz: quizState.idQuiz
    });

    const ajoutQuestion = async (questionDTO) => {
        return await fetch(`${urlBackend}/question/ajouter_question`, requestInit(methods.POST, questionDTO));
    };

    const onSubmit = (questionDTO) => {
        if (questionDTO.question === "" || questionDTO.option1 === "" ||
            questionDTO.option2 === "" || questionDTO.option3 === "" || questionDTO.answer === "") {
            setError(true);
        } else {
            ajoutQuestion(questionDTO).then(() => {
                Swal.fire({title: 'Question ajoutée', icon: 'success'}).then(() => {
                        history.push('/dashboard');
                    }
                );
            });
        }
    }

    const [error, setError] = useState(false);
    const handleChange = (prop) => (event) => {
        setError(false);
        setValues({...values, [prop]: event.target.value});
    };

    const useStyles = makeStyles(() => ({
        textField: {
            width: "90%",
            marginTop: 25,
            marginLeft: "5%",
            marginRight: "5%",
        },
    }));

    return (
        <div>
            <h2 className={"text-center my-3 fst-italic text-decoration-underline"}>Ajouter la question au Quiz</h2>
            {error && <ErrorMessageBalise>Erreur</ErrorMessageBalise>}
            <TextField
                onChange={handleChange('question')}
                label={"Question"}
                className={useStyles().textField}
                variant="outlined"
                style={{marginBottom: 25}}
            />
            <TextField
                onChange={handleChange('option1')}
                label={"Choix 1"}
                variant="outlined"
                className={useStyles().textField}
                style={{marginBottom: 25}}
            />
            <TextField
                onChange={handleChange('option2')}
                label={"Choix 2"}
                variant="outlined"
                className={useStyles().textField}
                style={{marginBottom: 25}}
            />
            <TextField
                onChange={handleChange('option3')}
                label={"Choix 3"}
                variant="outlined"
                className={useStyles().textField}
                style={{marginBottom: 25}}
            />
            <TextField
                onChange={handleChange('answer')}
                label={"Bonne réponse"}
                variant="outlined"
                className={useStyles().textField}
                style={{marginBottom: 25}}
            />
            <div className={"d-flex justify-content-center"}>
                <Button
                    variant="contained"
                    style={{marginBottom: 25}}
                    color="primary"
                    endIcon={<AddIcon/>}
                    onClick={() => {
                        onSubmit(values);
                    }}> Ajouter</Button>
            </div>
        </div>
    );
}
export default AjoutQuestion;