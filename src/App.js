import React, {useState} from 'react';
import './App.css';

function App() {

  const [generating, setGenerating] = useState(false);
  const [almost, setAlmost] = useState(false);
  const [done, setDone] = useState(false);
  const [name, setName] = useState("");

  function handleSubmit(event){
    event.preventDefault();

    setGenerating(true);

    setTimeout(function(){ 
      setGenerating(false);
      setAlmost(true);
    }, 3000);

    setTimeout(function(){ 
      setAlmost(false);
      setDone(true);
    }, 6000);

  }

  if(generating === true && almost === false && done === false){
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Generoidaan
          </p>
        </header>
      </div>
    );
  }
  if(generating === false && almost === true && done === false){
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Generointi valmis. Kirjoitetaan tulosta.
          </p>
        </header>
      </div>
    );
  } 
  if(generating === false && almost === false && done === true){
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Saunanimesi on Sauna-{name}
          </p>
        </header>
      </div>
    );
  } 
  if(generating === false && done === false){
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Syötä nimesi alle:
          </p>
          <form onSubmit={handleSubmit}>
            <label>Etunimi: <input type="text" name="front_name" onChange={(e)=>setName(e.target.value)}/></label><br/>
            <label>Sukunimi: <input type="text" name="last_name"/></label><br/>
            <input type="submit" value="Lähetä" />
          </form>
        </header>
      </div>
    );
  }
}

export default App;
