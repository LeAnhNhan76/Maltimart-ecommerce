import { Col, Container, Row } from "reactstrap";
import "./footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <Container className="main">
        <Row>
          <Col>
          <div className="item">
                <h3>Multimart</h3>
                <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
                cupiditate tempora ad et debitis labore sint iure excepturi, hic
                alias.
                </span>
              </div>
              <div className="item">
                <h3>Top categories</h3>
                <ul>
                  <li>Mobile phones</li>
                  <li>Modern sofa</li>
                  <li>Arm chair</li>
                  <li>Smart Watches</li>
                </ul>
              </div>
              <div className="item">
                <h3>Useful Links</h3>
                <ul>
                  <li>Shop</li>
                  <li>Cart</li>
                  <li>Login</li>
                  <li>Privacy Policy</li>
                </ul>
              </div>
              <div className="item">
                <h3>Contact</h3>
                <ul>
                  <li>< i className="ri-map-pin-line"></i> 72 Nguyen Thi Minh Khai, District No.3, HCMC</li>
                  <li>< i className="ri-phone-line"></i> 0787713997</li>
                  <li>< i className="ri-mail-line"></i> lenhanasus4@gmail.com</li>
                </ul>
              </div>
          </Col>
        </Row>
      </Container>
      <hr></hr>
      <div className="bottom">Copyright 2022 developed by Nhan Le. Alright reserved.</div>
    </div>
  );
};

export default Footer;
