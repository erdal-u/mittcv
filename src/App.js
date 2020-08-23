import React from 'react';

import Erdalcv from './Erdalcv.jpg'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img src={Erdalcv}  alt="logo" />
     
      
        <a
          className="App-link"
          href="https://www.google.com/intl/sv/gmail/about/#"
          target="_blank"
          rel="noopener noreferrer"
        >
          Erdal.ustalar@gmail.com
        </a>
      </header>
    </div>
  );
}

export default App;
