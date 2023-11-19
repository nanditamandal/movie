import {
 

  Route,
  Routes,
} from "react-router-dom";
import './App.css'
import Home from "./pages/Home.jsx"

import Projects from "./pages/Projects.jsx";
import About from "./pages/About.jsx";
import Users from "./pages/Users.jsx";

function App() {


  return (
    <>
     {/* <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1> */}
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>}/>
        <Route path="/projects" element={<Projects/> } />
        <Route path="/*" element={<Users/>} />
        
      </Routes>
    </>
  )
}

export default App
