import { Col, Container, Row } from 'reactstrap';
import './home.scss';
import { Link } from 'react-router-dom';
import heroImg from '../../assets/images/hero-img.png';
import Services from '../../components/Services/Services';
import ProductCard from '../../components/ProductCard/ProductCard';

const Home = () => {
  const year = new Date().getFullYear();
  return (
    <div className='home'>
      <div className="hero-section">
        <Container>
          <Row>
            <Col>
              <div className="left">
                <p>Trending product in {year}</p>
                <h1>Make your interior more minimalistic & modern</h1>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque distinctio asperiores a id possimus nemo tempore, nam odit quo iusto!
                </p>
                <Link to={'/shop'}>
                  Shop now
                </Link>
              </div>
              <div className="right">
                <img src={heroImg} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Services></Services>
      <Container>
        <Row>
          <Col>
            <section>
              <h3 className='title-section'>Trending Products</h3>
              <div className="items">
                <ProductCard></ProductCard>
                <ProductCard></ProductCard>
                <ProductCard></ProductCard>
                <ProductCard></ProductCard>
                <ProductCard></ProductCard>
                <ProductCard></ProductCard>
                <ProductCard></ProductCard>
              </div>
            </section>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <section>
              <h3 className='title-section'>Best sales</h3>
              <div className="items">
                <ProductCard></ProductCard>
                <ProductCard></ProductCard>
                <ProductCard></ProductCard>
                <ProductCard></ProductCard>
                <ProductCard></ProductCard>
                <ProductCard></ProductCard>
                <ProductCard></ProductCard>
                <ProductCard></ProductCard>
              </div>
            </section>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <section>
              <h3 className='title-section'>New Arrivals</h3>
              <div className="items">
                <ProductCard></ProductCard>
                <ProductCard></ProductCard>
                <ProductCard></ProductCard>
                <ProductCard></ProductCard>
                <ProductCard></ProductCard>
                <ProductCard></ProductCard>
                <ProductCard></ProductCard>
                <ProductCard></ProductCard>
                <ProductCard></ProductCard>
              </div>
            </section>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Home;