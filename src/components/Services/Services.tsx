import { Col, Container, Row } from "reactstrap";
import ServiceItem from "../ServiceItem/ServiceItem";
import './services.scss';

import serviceData from '../../assets/data/serviceData';

const Services = () => {
  return (
    <Container>
      <Row>
        <Col>
          <div className="services">
            {serviceData.map((item, index) => {
              return <ServiceItem item={item as any} key={index}></ServiceItem>
            })}
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Services;