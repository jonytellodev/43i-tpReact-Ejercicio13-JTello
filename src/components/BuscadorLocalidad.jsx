import { Form, InputGroup } from "react-bootstrap";

const BuscadorLocalidad = () => {
  return (
    <InputGroup className="mb-3">
      <Form.Control
      type="text"
      placeholder="ingresa una ubicación o ciudad..."
      className="text-center" />
    </InputGroup>
  );
};

export default BuscadorLocalidad;
