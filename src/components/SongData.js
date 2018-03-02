import {FOUR_FOUR, THREE_FOUR} from "../util/TimeSignature";

const song = {
    title: "Test Song",
    tempo: 60,
    measures: [
        {
            timeSignature: FOUR_FOUR,
            chords: ['Am', null, 'C', 'Em'],
            lyrics: ["Hello", null, null, "World!"]
        },
        {
            timeSignature: FOUR_FOUR,
            chords: ['Am', null, 'C', 'Em'],
            lyrics: ["one", "and", "two", "and", "three", "and", "four" ,"and"]
        },
        {
            timeSignature: FOUR_FOUR,
            chords: ['Am', null, 'C', 'Em'],
            lyrics: ["Hello", null, null, "World!"]
        },
        {
            timeSignature: FOUR_FOUR,
            chords: ['Am', null, 'C', 'Em'],
            lyrics: ["Hello", null, null, "World!"]
        },
        {
            timeSignature: THREE_FOUR,
            chords: ['Am', 'C', 'Em'],
            lyrics: ["one", "and", "two", "and", "three", "and"]
        },
        {
            timeSignature: FOUR_FOUR,
            chords: ['Am', null, 'C', 'Em'],
            lyrics: ["Hello", null, null, "World!"]
        },
        {
            timeSignature: FOUR_FOUR,
            chords: ['Am', null, 'C', 'Em'],
            lyrics: ["Hello", null, null, "World!"]
        },
        {
            timeSignature: FOUR_FOUR,
            chords: ['Am', null, 'C', 'Em'],
            lyrics: ["Hello", null, null, "World!"]
        }

    ]
}

export default song;