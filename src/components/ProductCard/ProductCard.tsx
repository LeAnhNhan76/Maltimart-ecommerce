import armChair01 from '../../assets/images/arm-chair-01.jpg'
import './productCard.scss';

const ProductCard = () => {
  return (
    <div className="product-card">
        <img src={armChair01} alt="" />
        <h5>Rolex Watch</h5>
        <p>watch</p>
        <span>2.5$</span>
        <button>< i className="ri-add-circle-fill"></i></button>
    </div>
  )
}

export default ProductCard