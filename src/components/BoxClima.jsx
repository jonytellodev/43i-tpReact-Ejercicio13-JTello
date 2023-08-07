import { Card } from "react-bootstrap";

const BoxClima = ({contenidoRespuesta}) => {
  return (
    <Card className="mt-3 mb-3">
      <Card.Img variant="top" src="" />
      <Card.Body>
        <Card.Title className="d-flex justify-content-center fs-2">{contenidoRespuesta.name && `Como estará el clima hoy en ${contenidoRespuesta.name}?`}</Card.Title>
        <div className="d-flex justify-content-center align-items-center flex-column">
          <h1>Temperatura Actual: {contenidoRespuesta.main && contenidoRespuesta.main.temp} °</h1>
          <h4>Humedad: {contenidoRespuesta.main && contenidoRespuesta.main.humidity} %</h4>
        </div>
        <div className="d-flex justify-content-center">
          <div className="d-flex flex-column text-center w-50">
            <h3 className="text-info">Minima</h3>
            <h1>{contenidoRespuesta.main && contenidoRespuesta.main.temp_min}°</h1>
          </div>
          <div className="d-flex flex-column text-center w-50">
            <h3 className="text-danger">Maxima</h3>
            <h1>{contenidoRespuesta.main && contenidoRespuesta.main.temp_max} °</h1>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};


export default BoxClima;
