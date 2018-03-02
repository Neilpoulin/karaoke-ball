import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import SongView from './components/Song';
import SongData from './components/SongData'
let _totalBeats = 31
let defaultTempo = 60


class App extends Component {


    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Karaoke Bouncing Ball</h1>
                </header>
                <SongView song={SongData}/>

            </div>
        );
    }
}

export default App;
