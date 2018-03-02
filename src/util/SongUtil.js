
export function getTotalBeats(song){
    return song.measures.reduce((total, m) => {
        total += m.timeSignature.getBeatsPerMeasure();
        return total;
    }, 0)
}