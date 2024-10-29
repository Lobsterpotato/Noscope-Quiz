import React from 'react';
import {Typography} from "@mui/material";

const Lobby = () => {
    return (
        <div>
            <Typography variant="h4" gutterBottom component="div" style={{textAlign: "center"}}
                        className={"text-center mt-5 fst-italic text-decoration-underline"}>
                Bienvenu dans le monde des Quiz!</Typography>
        </div>
    )
}

export default Lobby