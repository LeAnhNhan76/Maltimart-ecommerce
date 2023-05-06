import './header.scss';

import logo from '../../assets/images/eco-logo.png';
import userIcon from '../../assets/images/user-icon.png'
import { Link, useLocation } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';

const nav_links = [
  {
    key: 1,
    path: '/',
    display: 'Home'
  },
  {
    key: 2,
    path: '/shop',
    display: 'Shop'
  },
  {
    key: 3,
    path: '/cart',
    display: 'Cart'
  }
]

const Hearder = () => {
  const location = useLocation();
  console.log(location)
  return (
    <header>
      <Container>
        <Row>
          <Col>
            <div className="nav-container">
              <div className="logo">
                <img src={logo} alt="logo" />
                <span>Multimart</span>
              </div>
              <div className="navigation">
                <ul>
                  {
                    nav_links.map(item => {
                      return (
                        <li key={item.key} className={
                          location.pathname === item.path ? 'nav-active': ''
                        }>
                          <Link to={item.path} >
                            {item.display}
                          </Link>
                        </li>)
                    })
                  }
                  
                </ul>
              </div>
              <div className="nav-icons">
                <span className="item">
                  < i className="ri-heart-line"></i>
                  <span className='badge'>10</span>
                </span>
                <span className="item">
                  <i className="ri-shopping-bag-line"></i>
                  <span className='badge'>20</span>
                </span>
                <img src={userIcon} alt="" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </header>
  )
}

export default Hearder;