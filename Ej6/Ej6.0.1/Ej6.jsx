import React from "react";
import { useEffect, useState} from "react";


function Ej6() {

    const [chiste, setChiste] = useState("")

    const otro = ()=>{
        const url = "https://api.chucknorris.io/jokes/random"
        const peticion = fetch(url)
        peticion
        .then(infochiste => infochiste.json())
        .then(lectura => setChiste(lectura.value))
        .catch(console.log("se ha producido un error"))
    }

   useEffect( ()=>{
                otro()
   }, [])

    return<>
        <h1>Ejercicio 6, chistes</h1>
        {chiste}
        <button onClick={otro}>Otro</button>

    </>
}

export default Ej6