import { useState } from "react";
import { Form, InputGroup } from "react-bootstrap";

const BuscadorLocalidad = ({submitLocalidad}) => {
  const [localidad, setLocalidad] = useState("");
  
  const handleInputChange = (e) => {
    setLocalidad(e.target.value);
    
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitLocalidad(localidad);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <InputGroup className="mb-3">
        <Form.Control
          type="text"
          placeholder="ingresa una ubicación o ciudad..."
          className="text-center fs-4"
          value={localidad}
          onChange={handleInputChange}
        />
      </InputGroup>
    </Form>
  );
};

export default BuscadorLocalidad;
