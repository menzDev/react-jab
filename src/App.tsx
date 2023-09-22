import { useState , useEffect} from 'react'
import './App.css'

function App() {
  useEffect( () => {
    const url="https://randomuser.me/api";
    const peticion=fetch(url);
    peticion
    .then(datos => datos.json())
    .then(lectura=>console.log(lectura.results[0].name.first))
    .catch(()=>console.log("error en tu consola"))
  },[])


  return (
    <>
    
    <div><img src="{imagen}" alt="" /></div>
    </>
  )
};

export default App
