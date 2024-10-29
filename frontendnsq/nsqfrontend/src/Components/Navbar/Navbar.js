import React, {useEffect} from "react";
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import icon from "../../Images/iconNSQ.png"
import {Link} from "@material-ui/core";
import {urlBackend} from "../../service/serviceUtils";


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        color: 'black',
        marginRight: '10px',
    },
    img: {
        width: '60px',
        height: '60px',
        marginRight: '10px',
        fontStyle: 'italic',
    },
    bgAppBar: {
        backgroundColor: '#DEB887FF'
    }
}));

export default function Navbar() {
    const [role, setRole] = React.useState("");
    const classes = useStyles();
    let user = localStorage.getItem('player');
    const logout = () => {
        localStorage.removeItem('player');
        window.location.reload();
    };
    const getRole = async () => {
        const response = await fetch(`${urlBackend}/player/${user}`);
        return await response.json();
    }
    useEffect(() => {
        user = localStorage.getItem('player');
        if (user) {
            getRole().then(data => {
                setRole(data.role);
            });
        }
    }, []);

    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.bgAppBar}>
                <Toolbar>
                    <img src={icon} alt="iconeNSQ" className={classes.img}/>
                    <Typography variant="h5" className={classes.title}>
                        No Scope Quiz
                    </Typography>

                    {user != null || <>
                        <Link href="/register" underline="hover">
                            <Typography variant="h6" className={classes.title}>
                                S'inscrire
                            </Typography>
                        </Link>
                        <Link href="/login" underline="hover">
                            <Typography variant="h6" className={classes.title}>
                                Se connecter
                            </Typography>
                        </Link>
                    </>}
                    {user == null || <>
                        <Link href="/home" underline="hover">
                            <Typography variant="h6" className={classes.title}>
                                Accueil
                            </Typography>
                        </Link>
                        {role !== "admin" || <>
                            <Link href="/liste_joueurs" underline="hover">
                                <Typography variant="h6" className={classes.title}>
                                    Joueurs
                                </Typography>
                            </Link>
                            <Link href="/ajout_quiz" underline="hover">
                                <Typography variant="h6" className={classes.title}>
                                    Ajouter un quiz
                                </Typography>
                            </Link>
                            <Link href="/dashboard" underline="hover">
                                <Typography variant="h6" className={classes.title}>
                                    Dashboard
                                </Typography>
                            </Link>
                        </>}
                        <Link href="/login" onClick={logout} underline="hover">
                            <Typography variant="h6" className={classes.title}>
                                Se déconnecter
                            </Typography>
                        </Link>
                    </>}
                </Toolbar>
            </AppBar>
        </div>
    );
}
