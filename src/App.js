import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Navbar from "./layout/Navbar";
import Contato from "./components/pages/Contato";
import NovoProjeto from "./components/pages/NovoProjeto";
import Projeto from "./components/pages/Projeto";
import Empresa from "./components/pages/Empresa";


import Footer from "./layout/Footer";


function App() {
  return (
    <div className="App">
   

    <BrowserRouter>
  
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path = "/contato" element = {<Contato />} /> 
          <Route path = "/NovoProjeto" element = {<NovoProjeto />} /> 
          <Route path="/projeto" element = {<Projeto/>}/>
          <Route path="/empresa" element = {<Empresa/>}/>
        </Route>
      </Routes>
     
    </BrowserRouter>
   


    <Footer/>



    

    
    </div>
  );
}

export default App;
