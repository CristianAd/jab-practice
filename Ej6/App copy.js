import './App.css';
import { useEffect, useState } from 'react';

 
function App() {

    // const [nombre, setNombre] = useState("")
    // const [imagen, setImagen] = useState("")

    // useEffect( ()=>{
    //   const url = "https://randomuser.me/api/"
    //   const peticion = fetch(url)
    //   peticion
    //   .then(datos=>datos.json())
    //   .then(lectura =>{
    //     setNombre(`${lectura.results[0].name.first}`)
    //     setImagen(`${lectura.results[0]["picture"].large}`)})
       
     
    //   .catch(()=>console.log("se ha producido un error"))
    // }, [])

    const [datos, setDatos] = useState([])
    useEffect(()=>{
      const url = "https://randomuser.me/api/?results=3";
      const peticion = fetch(url)

      peticion
      .then(datos => datos.json())
      .then(lectura =>{
         lectura.results.map((persona) =>{
          setDatos((e)=>

          [...e, <div key={persona.email}>
            <div>{persona.name.first} {persona.name.last}</div>
            <div> <img src={persona.picture.large}/> </div>
            </div>
          ])
        }
   
         )
      })
      .catch( ()=>console.log("se ha producido un error"))


    }, [])


 
  return (
   <> 
   <h1>El emplead@ del mes es:</h1>
 
   {datos}

   </>
    
  );
}

export default App;
