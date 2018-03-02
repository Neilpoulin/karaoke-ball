export default class TimeSignature {
    constructor(displayName, beatsPerMeasure){
        this.beatsPerMeasure = beatsPerMeasure;
        this.displayName = displayName
    }

    getDisplayName(){
        return this.displayName;
    }

    getBeatsPerMeasure(){
        return this.beatsPerMeasure;
    }

    getBeatsPerDivision(numDivisions){
        return  this.beatsPerMeasure / numDivisions;
    }
}



export const FOUR_FOUR = new TimeSignature('4/4', 4);
export const CUT_TIME = new TimeSignature('cut-time', 2);
export const THREE_FOUR = new TimeSignature('3/4', 3);