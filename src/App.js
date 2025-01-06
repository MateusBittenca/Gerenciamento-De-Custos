
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Navbar from "./layout/Navbar";
import Contato from "./components/pages/Contato";
import NovoProjeto from "./components/pages/NovoProjeto";


function App() {
  return (
    <div className="App">
   
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path = "/contato" element = {<Contato />} /> 
          <Route path = "/projeto" element = {<NovoProjeto />} /> 
        </Route>
      </Routes>
    </BrowserRouter>

    
    </div>
  );
}

export default App;
