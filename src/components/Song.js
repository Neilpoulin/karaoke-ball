import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {getTotalBeats} from "../util/SongUtil";
import TimeSignature from "../util/TimeSignature";
import Measure from "./Measure";
import "./Song.css";

class Song extends Component {

    constructor(props) {
        super(props)

        this.state = {
            currentBeat: 0,
        }
        this.song = props.song;
        this.totalBeats = getTotalBeats(props.song);
        this.tickID = null;
    }

    static propTypes = {
        song: PropTypes.shape({
            title: PropTypes.string,
            measures: PropTypes.arrayOf(PropTypes.shape({
                timeSignature: PropTypes.instanceOf(TimeSignature),
                chords: PropTypes.arrayOf(PropTypes.string),
                lyrics: PropTypes.arrayOf(PropTypes.string),
            }))
        })
    }

    componentWillUnmount() {
        this.stopTick();
    }

    stopTick() {
        console.log('stop ticking')
        window.clearInterval(this.tickID);
    }

    doTick() {
        const {song} = this.props
        if (!song){
            return
        }

        let {currentBeat} = this.state;

        if (currentBeat === this.totalBeats) {
            currentBeat = 0;
        } else {
            currentBeat = currentBeat + .25;
        }
        console.log('updating beat to ' + currentBeat)
        this.setState({currentBeat})
    }

    startTick() {
        const {tempo=60} = this.props.song;
        console.log('starting ticking with tempo', tempo)
        this.tickID = window.setInterval(() => this.doTick(), 1000 * (tempo / 60) / 4)
    }

    resetTick() {
        this.stopTick()
        this.setState({
            currentBeat: 0
        })
        this.startTick()
    }


    render() {
        const {song} = this.props;
        const {currentBeat} = this.state;
        if (!song){
            return null
        }
        let beatCounter = 1;
        return (
            <div className="song">
                <div className="controls">
                    <h3>{song.title}</h3>
                    <div>Tempo: {song.tempo}bpm</div>
                    <div>Current Beat: {currentBeat} / {this.totalBeats}</div>
                    <div>
                        <button onClick={() => this.startTick()}>Start</button>
                        <button onClick={() => this.stopTick()}>Stop</button>
                        <button onClick={() => this.resetTick()}>Reset</button>
                    </div>
                </div>
                <div className="measures">
                    {song.measures.map((measure, i) => {
                        let highlightedBeat = -1
                        let completed = false;
                        let endBeat = beatCounter + measure.timeSignature.getBeatsPerMeasure();
                        if (currentBeat >= beatCounter && currentBeat <= endBeat && currentBeat > 0){
                            highlightedBeat = currentBeat - beatCounter;
                            console.log('highlighting beat' + highlightedBeat + ' after the ' + beatCounter)
                        } else if (currentBeat >= beatCounter){
                            completed = true;
                        }
                        beatCounter = endBeat;
                        return <Measure {...measure} key={`measure_${i}`} highlightedBeat={highlightedBeat} completed={completed} tempo={song.tempo}/>
                    })}
                </div>
            </div>
        )
    }
}

export default Song;