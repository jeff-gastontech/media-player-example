import React from 'react';
import { Grid, Paper } from "@mui/material";
import Container from "@mui/material/Container";
import Player from "../component/Player";
import Controls from "../component/Controls";

export default function PlayerPage() {
    return (
        <React.Fragment>
            <Container maxWidth="md" sx={{marginTop: "5rem"}}>
                <Paper variant="outlined" sx={{padding: "2rem"}}>
                <Grid container>
                    <Player/>
                    <Controls/>
                </Grid>
                </Paper>
            </Container>
        </React.Fragment>
    )
};