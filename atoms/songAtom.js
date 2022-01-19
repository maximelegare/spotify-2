import { atom } from "recoil";

export const currentTrackIdState = atom({
    key:"currentTrackStateAtom",
    default:null
})

export const isPlayingState = atom({
    key:"isPlayingStateAtom",
    default:false
})


