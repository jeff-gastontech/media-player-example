import React, { useContext } from "react";
import { PlayerContext, PlayerDispatchContext } from "../context/PlayerProvider";
import { Button, Grid} from "@mui/material";

export default function Controls() {

    const playlist = useContext(PlayerContext);
    const setPlaylist = useContext(PlayerDispatchContext);

    console.log("Controls playlist:"+playlist)

    const handleListen = (value) => {
        playlist.push({listenUrl: value.listenUrl, showName: value.showName})
        setPlaylist([...playlist]);
    }


    return (
        <Grid container item xs={12} sx={{width: "25rem"}}>
            <Grid item xs={4} sx={{display: 'flex', justifyContent:"center", alignItems:"center"}}>
                <Button onClick={() => {
                    handleListen({listenUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3', showName: "URL 1"})
                }}>URL 1</Button>
            </Grid>
            <Grid item xs={4} sx={{display: 'flex', justifyContent:"center", alignItems:"center"}}>
                <Button onClick={() => {
                    handleListen({listenUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3', showName: "URL 2"})
                }}>URL 2</Button>
            </Grid>
            <Grid item xs={4} sx={{display: 'flex', justifyContent:"center", alignItems:"center"}}>
                <Button onClick={() => {
                    handleListen({listenUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3', showName: "URL 3"})
                }}>URL 3</Button>
            </Grid>
        </Grid>
    );

};