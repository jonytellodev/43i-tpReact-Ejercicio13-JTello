import React from "react";
import { Card } from "react-bootstrap";

const BoxClima = () => {
  return (
    <Card className="mt-3 mb-3">
      <Card.Img variant="top" src="" />
      <Card.Body>
        <Card.Title className="d-flex justify-content-center">Tiempo actual en</Card.Title>
        <Card.Text className="d-flex justify-content-center align-items-center flex-column">
            <h1>00 °</h1>
            <h5>0% probabilidad de lluvias</h5>
        </Card.Text>
        <Card.Text className="d-flex justify-content-center">
          <div className="d-flex flex-column text-center w-50">
            <h3 className="text-info">Minima</h3>
            <h1>0 °</h1>
          </div>
          <div className="d-flex flex-column text-center w-50">
            <h3 className="text-danger">Maxima</h3>
            <h1>0 °</h1>
          </div>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default BoxClima;
