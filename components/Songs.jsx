import React from "react";

import Song from "./Song"

import { useRecoilState } from "recoil";
import { playlistState } from "../atoms/playlistAtom";

function Songs() {
  const [playlist, setPlaylist] = useRecoilState(playlistState);
  const name = playlist?.tracks.items.map((track) => track.track.name);

  return (
    <div className="px-8 flex flex-col text-white space-y-1">
      {playlist?.tracks.items.map((track, i) => (
        <Song key={track.track.id} order={i}  track={track}/>

      ))}
    </div>
  );
}

export default Songs;
