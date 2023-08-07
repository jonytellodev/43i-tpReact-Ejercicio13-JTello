import { useState } from "react";
import { Form, InputGroup } from "react-bootstrap";

const BuscadorPais = ({submitPais}) => {
  const [inicialesPais, setInicialesPais] = useState("");

  const handleInputChange = (e) =>{
    setInicialesPais(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    submitPais(inicialesPais);
  }

  return (
    <Form onSubmit={handleSubmit}>
      <InputGroup className="mb-3 d-flex justify-content-center">
        <Form.Control
          type="text"
          placeholder="ingresa un codigo de pais..."
          className="text-center fs-4"
          value={inicialesPais}
          onChange={handleInputChange}
        />
      </InputGroup>
      
    </Form>
  );
};

export default BuscadorPais;
