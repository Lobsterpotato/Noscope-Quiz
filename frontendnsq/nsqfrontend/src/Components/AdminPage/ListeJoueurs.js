import React, {useEffect, useState} from 'react';
import {urlBackend} from "../../service/serviceUtils";
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
    table: {
        marginTop: 20,
        paddingRight: 20,
        paddingLeft: 20,
    },
});


const ListeJoueurs = () => {
    const classes = useStyles();

    const [listJoueur, setlistJoueur] = useState([]);

    const getAllJoueurs = async () => {
        const response = await fetch(`${urlBackend}/player/liste_joueurs`);
        return await response.json();
    };

    useEffect(() => {
        getAllJoueurs().then(data => {
            setlistJoueur(data.filter(joueur => joueur.role !== "admin"));
        });
    }, []);

    if (listJoueur.length === 0) {
        return (
            <div style={{margin: 'auto', marginTop: '45px', textAlign: "center"}}>
                <Typography variant="h2" gutterBottom component="div">
                    Aucun joueur enregistré
                </Typography>
            </div>
        );
    }
    console.log(listJoueur);

    return (
        <div style={{height: 300, width: '85%', margin: 'auto', marginTop: '35px'}}>
            <Typography variant="h4" gutterBottom component="div" style={{textAlign: "center"}}
                        className={"text-center my-3 fst-italic text-decoration-underline"}>
                Liste des joueurs
            </Typography>
            <TableContainer component={Paper}>
                <Table className={classes.table} size="small">
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Pseudo</TableCell>
                            <TableCell>Nombre de Quiz Fait</TableCell>
                            <TableCell>Role</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {listJoueur.map((player) => (
                            <TableRow key={player.id} style={{textTransform: "capitalize"}}>
                                <TableCell component="th" scope="row">{player.id}</TableCell>
                                <TableCell>
                                    {player.username}
                                </TableCell>
                                <TableCell>
                                    {player.quizCount}
                                </TableCell>
                                <TableCell>
                                    {player.role}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

export default ListeJoueurs;