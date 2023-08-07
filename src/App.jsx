import { Button, Container } from "react-bootstrap";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../public/logotw.svg";
import BuscadorLocalidad from "./components/BuscadorLocalidad";
import BuscadorPais from "./components/BuscadorPais";
import BoxClima from "./components/BoxClima";
import { useEffect, useState } from "react";

function App() {
  const [inicialesPais, setInicialesPais] = useState("");
  const [localidad,setLocalidad] = useState("");
  const [contenidoRespuesta,setContenidoRespuesta] = useState({});

  const handlePaisSubmit = (pais) => {
    setInicialesPais(pais);
    console.log(inicialesPais);
  };

  const handleLocalidadSubmit = (loc) => {
    setLocalidad(loc);
    console.log(localidad);
  };

  useEffect(() => {
    consultarApi();
  }, [localidad, inicialesPais]);

  const consultarApi = async () => {
    // `http://api.openweathermap.org/data/2.5/weather?q=${localidad},${inicialesPais}&appid=17bbea418e838f2155c2a01f07874871&units=metric`
    try {
      const respuesta = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${localidad},${inicialesPais}&appid=17bbea418e838f2155c2a01f07874871&units=metric`);
      if (respuesta.ok) {
        const contenido = await respuesta.json();
        setContenidoRespuesta(contenido);
      } else {
        console.error("Error en la respuesta de la API:", await respuesta.text());
      }
    } catch (error) {
      console.error("Error al consultar la API:", error);
    }
  //     if (respuesta.ok) {
  //       const contenido = await respuesta.json();
  //       setContenidoRespuesta(contenido);
  //     } else {
  //       console.error("Error en la respuesta de la API");
  //     }
  //   } catch (error) {
  //     console.error("Error al consultar la API:", error);
  //   }
  //   console.log(contenidoRespuesta);
  };

  return (
    <>
      <Container className="mt-4 d-flex flex-column justify-content-center">
        <div className="d-flex justify-content-center flex-column mb-4">
          <img src={logo} alt="logo TW" className="img-fluid" />
          
        </div>
        <div className="row">
          <div className="col-md-12 col-lg-6">
            <BuscadorPais submitPais={handlePaisSubmit} />
          </div>
          <div className="col-md-12 col-lg-6">
            <BuscadorLocalidad submitLocalidad={handleLocalidadSubmit} />
          </div>
        </div>
        <Button variant="info" className="mt-3 fs-3" onClick={consultarApi}>
          Buscar
        </Button>
        <BoxClima contenidoRespuesta={contenidoRespuesta}/>
      </Container>
      <footer className="d-flex justify-content-center bg-black">
        <p className="text-white mt-4 text-center">
          &copy; 2023 JTelloDEV || Tucumán - Argentina || Powered by <a href="https://openweathermap.org/">Open Wheater Map</a>
          <br />
          Jonathan Tello Carrasco - Todos los derechos reservados
        </p>
      </footer>
    </>
  );
}

export default App;
