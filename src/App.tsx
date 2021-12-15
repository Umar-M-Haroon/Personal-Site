import React from 'react';
import twitter from './Logos/Twitter.svg';
import github from './Logos/github.svg';
import linkedIn from './Logos/LI-In-Bug.png';
import finale from './Logos/finale.png';
import myself from './Logos/myself.png';
import harbor from './Logos/harbor.png';
import homely from './Logos/homely.png';
import './App.css';

const App = () => {
  return (
    <div className="App-header">
      <img src={myself} alt="Umar Haroon" className="myself"></img>
      <h1>
        Umar Haroon
        </h1>
      <p>I’m a student at CU Boulder and an iOS developer</p>
      <div className="logoLinks">
        <a href="https://twitter.com/Umar_Haroon"><img src={twitter} className="App-logo" alt="logo" /></a>
        <a href="https://github.com/Umar-M-Haroon"><img src={github} className="App-logo" alt="logo" /></a>
        <a href="https://linkedin.com/in/Umar-haroon"><img src={linkedIn} className="App-logo" alt="logo" /></a>
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
      <p className="Resume">Download my resume<a href="https://docs.google.com/document/d/1K9c0x3NtDpnpqBD3zZbj2TUrRcBU0iQ_CCq8IbqnbmI/edit?usp=sharing" className="App-link"> here</a></p>
    </div>
  );
}

export default App;
