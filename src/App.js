import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Measure from './components/Measure'

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <div className="measures">
                    <Measure chords={['Am',null,'C','Em']} lyrics={["Hello", null, null, "World!"]}/>
                    <Measure chords={['Em',null,'C', null]} lyrics={[null, null, "how", "are"]}/>
                    <Measure chords={['Am',null,'C','Em']} lyrics={["you", null, "feel - ", " in?" ]}/>
                    <Measure chords={['Em',null,'C', null]}/>
                </div>
                <div className="measures">
                    <Measure />
                    <Measure/>
                    <Measure/>
                    <Measure/>
                </div>
            </div>
        );
    }
}

export default App;
