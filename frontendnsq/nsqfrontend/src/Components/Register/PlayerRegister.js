import {methods, requestInit, swalErr, urlBackend} from "../../service/serviceUtils";
import {
    Button,
    createTheme,
    FormControl,
    IconButton,
    InputAdornment,
    InputLabel,
    Link,
    MuiThemeProvider,
    OutlinedInput,
    TextField
} from "@material-ui/core";
import React, {useState} from 'react';
import {Visibility, VisibilityOff} from "@material-ui/icons";
import "./PlayerRegister.css";
import ErrorMessageBalise from "../ErrorMessageBalise/ErrorMessageBalise";

const PlayerRegister = () => {
    const [error, setError] = useState(false);
    const signup = async (player) => {
        return (await fetch(`${urlBackend}/player/signup`, requestInit(methods.POST, player)))
    }
    const theme = createTheme({
        palette: {
            primary: {
                main: '#DEB887',
            },
        },
    });

    const [values, setValues] = useState({
        username: '',
        password: '',
        showPassword: false,
    });


    const handleChange = (prop) => (event) => {
        setError(false);
        setValues({...values, [prop]: event.target.value});
    };

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const onSubmit = (user) => {
        console.log(user);
        if (user.username === "" || user.password === "") {
            setError(true);
        } else {
            let player = {
                username: user.username,
                password: user.password,
                role: 'Joueur',
            };
            signup(player).then(res => {
                if (res.status === 201) {     // si le status est différent de 201 c'est que le username est déjà pris
                    swalErr.fire({
                        title: "Vous êtes inscrit " + user.username + ", vous allez être redirigé à la page de connexion",
                        icon: 'success'
                    }).then(() => {
                        window.location.href = "/login";
                    })
                } else {
                    swalErr.fire({title: "Nom d'utilisateur déjà utilisé"}).then(() => {
                        setError(true);
                    })
                }
            })
        }
    };

    return (

        <div className="first">
            <div className="second">
                <span style={{fontSize: 30, marginBottom: 30, marginTop: 30}}>Inscrivez-vous!</span>
                <div className="credentials">
                    {error && <ErrorMessageBalise>Erreur</ErrorMessageBalise>}
                    <TextField
                        id="username"
                        label="Nom d'utilisateur"
                        variant="outlined"
                        style={{marginBottom: 25}}
                        onChange={handleChange('username')}
                        name="username"
                    />

                    <FormControl sx={{m: 1, width: '25ch'}} variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password">Mot de passe</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-password"
                            type={values.showPassword ? 'text' : 'password'}
                            value={values.password}
                            style={{marginBottom: 25}}
                            onChange={handleChange('password')}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {values.showPassword ? <VisibilityOff/> : <Visibility/>}
                                    </IconButton>
                                </InputAdornment>
                            }
                            label="Mot de passe"
                        />
                    </FormControl>
                    <Link href={"/login"} style={{textAlign: "center"}} underline="hover">
                        {'Vous avez déjà un compte? Connectez-vous!'}
                    </Link>
                    <MuiThemeProvider theme={theme}>
                        <Button
                            variant="contained"
                            color="primary"
                            style={{marginTop: 25}}
                            onClick={() => onSubmit(values)}
                        >
                            S'inscrire
                        </Button>
                    </MuiThemeProvider>
                </div>
            </div>
        </div>
    )
}
export default PlayerRegister;

