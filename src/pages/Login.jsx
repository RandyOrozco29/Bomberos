import Formulario from "../components/login/FormularioLogin";
import NavbarLogin from "../components/login/NavBarLogin";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export function Login() {
  return (
    <>
      <NavbarLogin />
      <Container>
        <Row>
          <Col></Col>
          <Col sm={8} lg={4} xl={4}>
            <Formulario />
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </>
  );
}

export default Login;
