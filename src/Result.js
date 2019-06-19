import React from 'react';

function App({nimi}) {
    if(({nimi} === "Tuomas") || ({nimi} === "tuomas")){
        return (
            <div>
                <p>Saunanimesi on</p>
                <h1>{nimi}</h1>
            </div>
        );
    } else {
        return (
            <div>
                <p>Saunanimesi on</p>
                <h1>Sauna-{nimi}</h1>
            </div>
        ); 
    }     
}

export default App;
