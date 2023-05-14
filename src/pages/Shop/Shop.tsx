import { useState } from 'react';
import { Col, Container, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Input, Row } from 'reactstrap';
import ProductCard from '../../components/ProductCard/ProductCard';
import './shop.scss';

const Shop = () => {
  const [isOpenFilterBy, setIsOpenFilterBy] = useState(false);
  const [isOpenSortBy, setIsOpenSortBy] = useState(false);

  const toggleFilterBy = () => {
    setIsOpenFilterBy(prev => !prev);
  }

  const toggleSortby = () => {
    setIsOpenSortBy(prev => !prev);
  }

  return (
    <div className='shop'>
      <div className="banner">
        <span>Products</span>
      </div>
      <div className="shop-content">
        <Container>
          <Row>
            <Col>
            <div className="filter">
              <div className="left">
                <Dropdown isOpen={isOpenFilterBy} toggle={toggleFilterBy}>
                  <DropdownToggle caret>Filter By Category</DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem>Chair</DropdownItem>
                    <DropdownItem>Mobile</DropdownItem>
                    <DropdownItem>Watch</DropdownItem>
                    <DropdownItem>Television</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </div>
              <div className="right">
                <Dropdown isOpen={isOpenSortBy} toggle={toggleSortby}>
                  <DropdownToggle caret>Sort by</DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem>Chair</DropdownItem>
                    <DropdownItem>Mobile</DropdownItem>
                    <DropdownItem>Watch</DropdownItem>
                    <DropdownItem>Television</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
                <Input placeholder='Type something...'></Input>
              </div>
            </div>
            <div className="products">
              <ProductCard></ProductCard>
              <ProductCard></ProductCard>
              <ProductCard></ProductCard>
              <ProductCard></ProductCard>
              <ProductCard></ProductCard>
              <ProductCard></ProductCard>
              <ProductCard></ProductCard>
              <ProductCard></ProductCard>
            </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default Shop;