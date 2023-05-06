import { Col, Container, Row } from "reactstrap";
import ServiceItem from "../ServiceItem/ServiceItem";
import './services.scss';

import serviceData from '../../assets/data/serviceData';

const Services = () => {
  return (
    <Container className="services">
      <Row>
        <Col>
          {serviceData.map(item => {
            return <ServiceItem item={item as any}></ServiceItem>
          })}
        </Col>
      </Row>
    </Container>
  )
}

export default Services;