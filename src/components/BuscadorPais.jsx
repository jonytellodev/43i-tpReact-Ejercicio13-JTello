import { Form, InputGroup } from "react-bootstrap";

import React from 'react';

const BuscadorPais = () => {
    return (
        <InputGroup className="mb-3 d-flex justify-content-center">
        <Form.Control
        type="text"
        placeholder="ingresa un codigo de pais..."
        className="text-center" />
      </InputGroup>
    );
};

export default BuscadorPais;