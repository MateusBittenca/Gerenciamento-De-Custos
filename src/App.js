import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Navbar from "./layout/Navbar";
import Contato from "./components/pages/Contato";
import NovoProjeto from "./components/pages/NovoProjeto";
import Projeto from "./components/pages/Projeto";
import Empresa from "./components/pages/Empresa";
import Container from "./layout/Container";
import Footer from "./layout/Footer";
import Project from "./components/pages/Project";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/NovoProjeto" element={<NovoProjeto />} />
          <Route path="/projeto" element={<Projeto />} />
          <Route path="/empresa" element={<Empresa />} />
          <Route path = "/project/:id" element={<Project />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
