import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../css/footer.css"
import rick from "../img/rick.png"
function Footer() {
    return (
        <footer sticky="bottom" id="footer" className=" text-light py-4">
        <Container>
            <Row>
            <Col sm={4}>
                <h5></h5>
                <p>
                Salcedo
                </p>
                <img src={rick}  width="150" height="150" />
            </Col>
            <Col  sm={4}>
                <h5>Redes Sociales</h5>
                <ul>
                <li>
                    <a className="text-decoration-none"  href="https://www.facebook.com/">Facebook</a>
                </li>
                <li>
                    <a className="text-decoration-none" href="https://twitter.com/">Twitter</a>
                </li>
                <li>
                    <a className="text-decoration-none" href="https://www.instagram.com/">Instagram</a>
                </li>
                </ul>
            </Col>
            <Col sm={4}>
                <h5>Enlaces de Interés</h5>
                <ul>
                <li>
                    <a className="text-decoration-none" href="#">Política de Privacidad</a>
                </li>
                <li>
                    <a className="text-decoration-none" href="#">Términos y Condiciones</a>
                </li>
                <li>
                    <a className="text-decoration-none" href="#">Contacto</a>
                </li>
                </ul>
                
            </Col>
            <small className="text-center mt-5">&copy; Eduardo Salcedo 2023.</small>
            </Row>
            
        </Container>
        </footer>
    );
}

export default Footer;
