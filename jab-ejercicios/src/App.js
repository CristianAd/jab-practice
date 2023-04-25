import Actividad1 from './Actividad1';
import './App.css';

 
function App() {
    const reyes=[
    {
      nombre:"Atanagildo",
      color:"darkolivegreen",
      reinado:178, 
      vacasComidas: 15
    },{
      nombre:"Ervigio",
      color:"crimson",
      reinado:169, 
      vacasComidas: 25
    },{
      nombre:"Ataúlfo",
      color:"peru",
      reinado:81, 
      vacasComidas: 35
    },{
      nombre:"Leogivildo",
      color:"darkmagenta",
      reinado:126, 
      vacasComidas: 45
    },{
      nombre:"Recesvinto",
      color:"royalblue",
      reinado:141, 
      vacasComidas: 55
    },{
      nombre:"Sisebuto",
      color:"teal",
      reinado:69, 
      vacasComidas: 65
    }
  ]

 
  return (
   <> 

   <h1>
    Actividad 1
   </h1>
    <Actividad1 reyes={reyes}/> 
 
    </>
    
  );
}

export default App;
