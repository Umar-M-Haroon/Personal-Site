import React from 'react';
import twitter from './Logos/Twitter.svg';
import github from './Logos/github.svg';
import linkedIn from './Logos/LI-In-Bug.png';
import finale from './Logos/finale.png';
import harbor from './Logos/harbor.png';
import homely from './Logos/homely.png';
import resume from './Logos/Umar-Haroon Resume';
import './App.css';

const App = () => {
  return (
    <div className="App-header">
      <h1>
        Umar Haroon
        </h1>
      <p>I’m a student at CU Boulder and an iOS developer</p>
      <div className="logoLinks">
        <img src={twitter} className="App-logo" alt="logo" />
        <img src={github} className="App-logo" alt="logo" />
        <img src={linkedIn} className="App-logo" alt="logo" />
      </div>
      <h3>
        My Work
        </h3>
      <div className="Previews">
        <div className="App-Preview">
          <a href="https://harbor.komodollc.com"><img src={harbor} className="App-Preview" alt="logo" /></a>
          <a href="https://harbor.komodollc.com" className="App-link">Harbor</a>
        </div>
        <div className="App-Preview">
          <a href="https://homely.komodollc.com"><img src={homely} className="App-Preview" alt="logo" /></a>
          <a href="https://homely.komodollc.com" className="App-link">Homely</a>
        </div>
        <div className="App-Preview">
          <a href="https://finale.komodollc.com"><img src={finale} className="App-Preview" alt="logo" /></a>
          <a href="https://finale.komodollc.com" className="App-link">Finale</a>
        </div>
      </div>
      <a href={resume}><h3>Resume</h3></a>
    </div>
  );
}

export default App;
