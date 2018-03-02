import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TimeSignature from './../util/TimeSignature'
import './Measure.css';
import {FOUR_FOUR} from "../util/TimeSignature"
import Division from './Division'

class Measure extends Component {
    static propTypes = {
        chords: PropTypes.arrayOf(PropTypes.string),
        lyrics: PropTypes.arrayOf(PropTypes.string),
        timeSignature: PropTypes.instanceOf(TimeSignature),
        highlightedBeat: PropTypes.number,
        completed: PropTypes.bool,
        tempo: PropTypes.number,
    }

    static defaultProps = {
        chords: [null],
        lyrics: [null],
        timeSignature: FOUR_FOUR,
        highlightedBeat: null,
    }

    render() {
        const {completed, chords, lyrics, timeSignature, highlightedBeat, tempo} = this.props;
        let started = completed || highlightedBeat >= 0;
        const lyricDivisionsPerBeat = timeSignature.getBeatsPerDivision(lyrics.length)
        const chordDivisionsPerBeat = timeSignature.getBeatsPerDivision(chords.length)
        let rangeWidth = completed ? 100 : Math.max(highlightedBeat/timeSignature.getBeatsPerMeasure() * 100, 0);
        let secondsPerMeasure = tempo / 60 * timeSignature.getBeatsPerMeasure();

        return (
            <div className={`measure ${started ? 'started' : ''}`}>
                <div className="rangeContainer">
                    <span className="rangeValue" style={{width: `${started ? 100 : 0}%`, transitionDuration: `${secondsPerMeasure}s`}}></span>
                </div>
                <div className="track chords">
                    {chords.map((chord, i) => <Division key={`chord_${i}`} widthPercent={ 100 / Math.max(chords.length, 1) } type="chord" value={chord} active={highlightedBeat >= i*chordDivisionsPerBeat && highlightedBeat < i*chordDivisionsPerBeat + chordDivisionsPerBeat} />)}
                </div>
                <div className="track lyrics">
                    {lyrics.map((lyric, i) => {

                        return <Division key={`lyric_${i}`} widthPercent={ 100 / Math.max(lyrics.length, 1) } type="lyric" value={lyric} active={highlightedBeat >= i*lyricDivisionsPerBeat && highlightedBeat < i*lyricDivisionsPerBeat + lyricDivisionsPerBeat}/>
                    })}
                </div>
            </div>
        );
    }
}

export default Measure;
