import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function Formulario() {
  return (
    <>
      <h1>Login </h1>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Usuario</Form.Label>
          <Form.Control type="type" placeholder="Escriba su usuario" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control type="password" placeholder="Ingrese su contraseña" />
        </Form.Group>
        <Button variant="outline-danger" type="submit">
          Enviar
        </Button>
      </Form>
    </>
  );
}

export default Formulario;
