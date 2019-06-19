import React, {useState} from 'react';

function Content() {

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
    }, 10000);

    setTimeout(function(){ 
      setAlmost(false);
      setDone(true);
    }, 15000);

  }

  if(generating === true){
    return (
      <div>
        <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        <div className="w3-light-grey">
        <div className="w3-container w3-green w3-center">{progress}%</div>
        </div>
        <p>Generoidaan saunanimeä...<br/>Älä sulje selainta.</p>
      </div>
    );
  }
  if(almost === true){
    return (
      <div>
        <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
        <p>
        Generointi valmis.<br/>
        Renderöidään tulosta.
        </p>
      </div>
    );
  } 
  if(done === true){
    if(name === "Tuomas" || name === "tuomas"){
      return (
        <div>
            <div>
              <p>Saunanimesi on</p>
              <h1>{name}</h1>
              <button onClick={restart}>Tee uudestaan</button>
            </div>
        </div>
      );
    } else {
      return (
        <div>
            <div>
              <p>Saunanimesi on</p>
              <h1>Sauna-{name}</h1>
              <button onClick={restart}>Tee uudestaan</button>
            </div>
        </div>
      ); 
    }   
  } 
  if(generating === false && almost === false && done === false){
    return (
      <div>
          <h2>Hikinen höpöttäjä vai<br/>sammunut saunamajuri?</h2>
          <p>Selvitä, mikä on sinun saunanimesi!</p>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Etunimi: <input type="text" name="front_name" onChange={(e)=>setName(e.target.value)} required/></label><br/>
              <label>Sukunimi: <input type="text" name="last_name" required/></label><br/>
            </div>
            <input type="submit" value="Generoi" />
          </form>
      </div>
    );
  }
}

export default Content;
