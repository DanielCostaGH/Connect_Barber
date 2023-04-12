//imports do framework
import { Outlet } from "react-router-dom";

// imports de paginas e components
import Navbar from "./components/Navbar/Navbar"


function App() {

  return (
    <div className="App">
       <Navbar/>
       <Outlet/>
       
    </div>
  )
}

export default App
