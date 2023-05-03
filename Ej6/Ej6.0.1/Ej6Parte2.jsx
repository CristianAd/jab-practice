import React from "react";
import "./App.css"
import { useState, useEffect } from "react";


function Ej6Parte2() {
    const [equipo, setEquipo] = useState([])

    useEffect(()=>{
        const url = "https://www.thesportsdb.com/api/v1/json/3/all_leagues.php"
        const peticion = fetch(url)
        peticion
        .then(valor => valor.json())
        .then(equipos => equipos.leagues.map(ligas => setEquipo( 
            e => [...e, <div className="caja" key={ligas.idLeague}>{ligas.strLeague}</div>]
            )) )
        .catch(console.log("Se ha producido un error"))
    }, [])


    return<>
       {equipo}
    </>
}

export default Ej6Parte2