import { useState , useEffect} from 'react'
import './App.css'

function App() {
  const [name, setName] = useState("");
  useEffect( () => {
    const url="https://randomuser.me/api";
    const peticion=fetch(url);
    peticion
    .then(datos => datos.json())
    .then(lectura=>setName(lectura.results[0].name.first))
    .catch(()=>console.log("error en tu consola"))
  },[])


  return (
    <>
    {name}
    </>
  )
};

export default App
