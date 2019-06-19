import React from 'react';
import './App.css';
import {Helmet} from "react-helmet";
import Content from './Content';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Saunanimigeneraattori</title>
        </Helmet>
        <Content />
      </header>
    </div>
  );

}
  

export default App;
