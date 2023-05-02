import './App.css';

 
function App() {
    
  const url = "https://randomuser.me/api/"
  const peticion = fetch(url)
  peticion.then(datos=>datos.json())
  .then(lectura => console.log(lectura))
  peticion.catch(()=>console.log('No!!'))

 
  return (
   <> 

   </>
    
  );
}

export default App;
