import { Button, Container } from "react-bootstrap";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../public/logotw.svg";
import BuscadorLocalidad from "./components/BuscadorLocalidad";
import BuscadorPais from "./components/BuscadorPais";
import BoxClima from "./components/BoxClima";


function App() {
  return (
    <>
      <Container className="mt-4 d-flex flex-column justify-content-center">
        <div className="d-flex justify-content-center flex-column mb-4">
        <img src={logo} alt="logo TW" className="w-100"/>
        <h4 className="text-white text-center mt-3">Como estara el clima hoy?...</h4>
        </div>
        <BuscadorPais></BuscadorPais>
        <BuscadorLocalidad></BuscadorLocalidad>
        <Button variant="info" className="text-white">Buscar</Button>
        <BoxClima></BoxClima>
      </Container>
      <footer className="d-flex justify-content-center bg-black">
        <p className="text-white mt-4 text-center">
          &copy; 2023 JTelloDEV || Tucumán - Argentina<br />Todos los derechos reservados
        </p>
      </footer>
    </>
  );
}

export default App;
