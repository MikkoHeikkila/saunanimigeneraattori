import React, {useState} from 'react';
import Result from './Result'
import './App.css';

function App() {

  const [progress, setProgress] = useState(0);
  const [generating, setGenerating] = useState(false);
  const [almost, setAlmost] = useState(false);
  const [done, setDone] = useState(false);
  const [name, setName] = useState("");

  function restart(){
    setAlmost(false);
    setDone(false);
    setGenerating(false);
    setName("");
    setProgress(0);
  }

  function handleSubmit(event){
    event.preventDefault();

    setGenerating(true);

    var width = 1;
    var id = setInterval(frame, 50);
    function frame() {
      if (width >= 99) {
        clearInterval(id);
      } else {
        width++;
        setProgress(width);
      }
    }

    setTimeout(function(){ 
      setGenerating(false);
      setAlmost(true);
    }, 9000);

    setTimeout(function(){ 
      setAlmost(false);
      setDone(true);
    }, 12000);

  }

  if(generating === true && almost === false && done === false){
    return (
      <div className="App">
        <header className="App-header">
          <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
          <div className="w3-light-grey">
            <div className="w3-container w3-green w3-center">{progress}%</div>
          </div>
          <p>Generoidaan...</p>
        </header>
      </div>
    );
  }
  if(generating === false && almost === true && done === false){
    return (
      <div className="App">
        <header className="App-header">
          <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
          <p>
            Generointi valmis.<br/>
            Renderöidään tulosta.
          </p>
        </header>
      </div>
    );
  } 
  if(generating === false && almost === false && done === true){
    return (
      <div className="App">
        <header className="App-header">
          <Result nimi={name} />
          <button onClick={restart}>Tee uudestaan</button>
        </header>
      </div>
    );
  } 
  if(generating === false && done === false){
    return (
      <div className="App">
        <header className="App-header">
          <h2>Kihisevä kiuas vai<br/>sammunut saunatonttu?</h2>
          <p>Selvitä, mikä on sinun saunanimesi!</p>
          <form onSubmit={handleSubmit}>
            <label>Etunimi: <input type="text" name="front_name" onChange={(e)=>setName(e.target.value)}/></label><br/>
            <label>Sukunimi: <input type="text" name="last_name"/></label><br/>
            <input type="submit" value="Generoi" />
          </form>
        </header>
      </div>
    );
  }
}

export default App;
