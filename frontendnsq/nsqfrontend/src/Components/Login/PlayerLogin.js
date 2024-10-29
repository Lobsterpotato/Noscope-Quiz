import {toast, urlBackend} from "../../service/serviceUtils";
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
import "./PlayerLogin.css";
import ErrorMessageBalise from "../ErrorMessageBalise/ErrorMessageBalise";

const PlayerLogin = () => {
    const [error, setError] = useState(false);
    const login = async (username, password) => {
        return (await fetch(`${urlBackend}/player/login/${username}/${password}`)).json()
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
        if (user.username === "" || user.password === "") {
            setError(true);
        } else {
            login(user.username, user.password).then(res => {
                if (res.username !== undefined) {
                    localStorage.setItem("player", res.username);
                    toast.fire({title: "Bienvenue " + res.username}).then(() => {
                            window.location.href = "/home";
                        }
                    );
                } else {
                    setError(true);
                }
            })
        }
    };

    return (

        <div className="first">
            <div className="second">
                <span style={{fontSize: 30, marginBottom: 30, marginTop: 30}}>Connectez-vous</span>
                <div className="credentials">
                    {error && <ErrorMessageBalise>Vos identifiants sont incorrects</ErrorMessageBalise>}
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

                    <Link href={"/register"} style={{textAlign: "center"}} underline="hover">
                        {'Pas de compte ? Inscrivez-vous!'}
                    </Link>

                    <MuiThemeProvider theme={theme}>
                        <Button
                            variant="contained"
                            color="primary"
                            style={{marginTop: 25}}
                            onClick={() => onSubmit(values)}
                        >
                            Connexion
                        </Button>
                    </MuiThemeProvider>
                </div>
            </div>
        </div>
    )
}
export default PlayerLogin;

