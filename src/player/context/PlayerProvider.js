import React, { createContext, useState } from "react";

// Create two context:
// PlayerContext: to query the context state
// PlayerDispatchContext: to mutate the context state
const PlayerContext = createContext(undefined);
const PlayerDispatchContext = createContext(undefined);

// A "provider" is used to encapsulate only the
// components that needs the state in this context
function PlayerProvider({ children }) {
    const [playlist, setPlaylist] = useState([]);

    return (
        <PlayerContext.Provider value={playlist}>
            <PlayerDispatchContext.Provider value={setPlaylist}>
                {children}
            </PlayerDispatchContext.Provider>
        </PlayerContext.Provider>
    );
}

export { PlayerProvider, PlayerContext, PlayerDispatchContext };