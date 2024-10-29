import React, {useState} from 'react';
import {useHistory} from "react-router-dom/cjs/react-router-dom";
import {TextField} from "@material-ui/core";
import {Button} from "@mui/material";
import ErrorMessageBalise from "../ErrorMessageBalise/ErrorMessageBalise";
import {makeStyles} from "@material-ui/core/styles";
import AddIcon from '@mui/icons-material/Add';
import {methods, requestInit, urlBackend} from "../../service/serviceUtils";
import Swal from "sweetalert2";

const AjoutQuiz = () => {
    const history = useHistory();

    const [values, setValues] = useState({
        titre: '',
        categorie: '',
        description: '',
        difficulte: '',
        questionsList: [],
    });

    const AjoutQuiz = async (quiz) => {
        return await fetch(`${urlBackend}/quiz/ajouter_quiz`, requestInit(methods.POST, quiz));
    };

    const onSubmit = (quiz) => {
        if (quiz.titre === "" || quiz.categorie === "" ||
            quiz.description === "" || quiz.difficulte === "") {
            setError(true);
        } else {
            AjoutQuiz(quiz).then(() => {
                Swal.fire({title: 'Quiz ajouté', icon: 'success'}).then(() => {
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
            <h2 className={"text-center my-3 fst-italic text-decoration-underline"}>Ajouter le Quiz</h2>
            {error && <ErrorMessageBalise>Erreur</ErrorMessageBalise>}
            <TextField
                onChange={handleChange('titre')}
                label={"Titre du Quiz"}
                className={useStyles().textField}
                variant="outlined"
                style={{marginBottom: 25}}
            />
            <TextField
                onChange={handleChange('categorie')}
                label={"Catégorie du Quiz"}
                placeholder={"Ex: Mathématiques, Physique, ..."}
                variant="outlined"
                className={useStyles().textField}
                style={{marginBottom: 25}}
            />
            <TextField
                onChange={handleChange('description')}
                label={"Description du Quiz"}
                variant="outlined"
                className={useStyles().textField}
                style={{marginBottom: 25}}
            />
            <TextField
                onChange={handleChange('difficulte')}
                label={"Difficulté du Quiz"}
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
export default AjoutQuiz;