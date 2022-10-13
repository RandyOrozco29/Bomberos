import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function NavbarLogin() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            Bomberos Voluntarios
          </Navbar.Brand>
        </Container>
      </Navbar>
      <br/>
    </>
  );
}

export default NavbarLogin;
