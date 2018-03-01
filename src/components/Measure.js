import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Measure.css';

class App extends Component {
    static propTypes = {
        chords: PropTypes.arrayOf(PropTypes.string),
        lyrics: PropTypes.arrayOf(PropTypes.string)
    }

    static defaultProps = {
        chords: [],
        lyrics: []
    }

    render() {
        const {chords, lyrics} = this.props;
        return (
            <div className="measure">
                <div className="track chords">
                    {chords.map((chord, i) => <div key={`chords_${i}_${chord}`} className="chord">{chord}</div>)}
                </div>
                <div className="track lyrics">
                    {lyrics.map((lyric, i) => <div style={{width: `${100 / Math.max(lyrics.length, 1)}%`}} key={`lyrics_${i}_${lyric}`} className="lyric">{lyric}</div>)}
                </div>
            </div>
        );
    }
}

export default App;
