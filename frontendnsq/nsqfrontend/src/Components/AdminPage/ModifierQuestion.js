import React, {useEffect, useState} from 'react';
import {useHistory} from "react-router-dom/cjs/react-router-dom";
import {methods, requestInit, urlBackend} from "../../service/serviceUtils";
import Swal from "sweetalert2";
import {makeStyles} from "@material-ui/core/styles";
import ErrorMessageBalise from "../ErrorMessageBalise/ErrorMessageBalise";
import {TextField} from "@material-ui/core";
import {Button} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";


const ModifierQuestion = () => {
    const history = useHistory();
    const [values, setValues] = useState({
        idQuestion: '',
        question: '',
        option1: '',
        option2: '',
        option3: '',
        answer: '',
    });

    useEffect(() => {
        let question;
        question = history.location.state.question;
        setValues({
                idQuestion: question.idQuestion,
                question: question.question,
                option1: question.option1,
                option2: question.option2,
                option3: question.option3,
                answer: question.answer,
            }
        );
    }, []);


    const modifyQuestion = async (question) => {
        return await fetch(`${urlBackend}/question/update_question/${question.idQuestion}`, requestInit(methods.PUT, question));
    };

    const onSubmit = (question) => {
        if (question.question === "" || question.option1 === "" ||
            question.option2 === "" || question.option3 === "" || question.answer === "") {
            setError(true);
        } else {
            modifyQuestion(question).then(() => {
                Swal.fire({title: 'Question modifiée', icon: 'success'}).then(() => {
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
            <h2 className={"text-center my-3 fst-italic text-decoration-underline"}>
                Modifier la question: {values.idQuestion}</h2>
            {error && <ErrorMessageBalise>Erreur</ErrorMessageBalise>}
            <TextField
                value={values.question}
                onChange={handleChange('question')}
                label={"Question"}
                className={useStyles().textField}
                variant="outlined"
                style={{marginBottom: 25}}
            />
            <TextField
                value={values.option1}
                onChange={handleChange('option1')}
                label={"Choix 1"}
                variant="outlined"
                className={useStyles().textField}
                style={{marginBottom: 25}}
            />
            <TextField
                value={values.option2}
                onChange={handleChange('option2')}
                label={"Choix 2"}
                variant="outlined"
                className={useStyles().textField}
                style={{marginBottom: 25}}
            />
            <TextField
                value={values.option3}
                onChange={handleChange('option3')}
                label={"Choix 3"}
                variant="outlined"
                className={useStyles().textField}
                style={{marginBottom: 25}}
            />
            <TextField
                value={values.answer}
                floatingLabel={true}
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
                    }}> Modifier</Button>
            </div>
        </div>
    );
}
export default ModifierQuestion;