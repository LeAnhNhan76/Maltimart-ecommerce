import { Col, Container, Row } from 'reactstrap';
import './home.scss';
import { Link } from 'react-router-dom';
import heroImg from '../../assets/images/hero-img.png';

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
                  <a href=''>Shop now</a>
                </Link>
              </div>
              <div className="right">
                <img src={heroImg} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default Home;