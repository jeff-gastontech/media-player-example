import React, { useContext } from "react";
import { PlayerContext, PlayerDispatchContext } from "../context/PlayerProvider";
import { Grid, IconButton } from "@mui/material";
import ClearIcon from '@mui/icons-material/Clear';

export default function Player() {

    const playlist = useContext(PlayerContext);
    const setPlaylist = useContext(PlayerDispatchContext);
    console.log("Player playlist:" + playlist)

    return (
        <Grid container item xs={12} sx={{width: "25rem"}}>
            {playlist.length > 0 ? (<React.Fragment>
                <Grid item xs={12}>
                    <audio style={{width: "100%"}} src={playlist[0].listenUrl}
                           type="audio/mpeg"
                           controls
                           onEnded={() => {
                               setPlaylist(playlist.slice(1));
                           }}
                    >
                        I'm sorry. You're browser doesn't support HTML5 <code>audio</code>.
                    </audio>
                </Grid>
                <Grid item xs={12}>
                    Now Playing:
                </Grid>
                <Grid container item xs={12} alignItems="center">
                    <Grid item xs={6}>
                        {playlist[0].showName}
                    </Grid>
                    <Grid item xs={6} style={{
                        display: "flex",
                        justifyContent: "flex-end"
                    }}>
                        <IconButton onClick={() => {
                            setPlaylist(setPlaylist.slice(1));
                        }}>
                            <ClearIcon color="secondary"/>
                        </IconButton>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    Next Up:
                </Grid>
                <Grid item xs={12}>
                    {playlist.length > 1 ?
                        playlist.slice(1).map((episode, index) => {
                            return (
                                <Grid container item xs={12} key={episode.showName + "-" + index} alignItems="center">
                                    <Grid item xs={6}>
                                        {episode.showName}
                                    </Grid>
                                    <Grid item xs={6} style={{
                                        display: "flex",
                                        justifyContent: "flex-end"
                                    }}>
                                        <IconButton onClick={() => {
                                            playlist.splice(index + 1, 1)
                                            setPlaylist(playlist.slice(0));
                                        }}>
                                            <ClearIcon color="secondary"/>
                                        </IconButton>
                                    </Grid>
                                </Grid>
                            );
                        })
                        : "No additional shows selected"}
                </Grid>
            </React.Fragment>) : "There are currently no items in your listening queue"}
        </Grid>
    );

};