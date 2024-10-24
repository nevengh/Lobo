import FeaturedCard from '../../components/FeaturedCard/FeaturedCard'
import Hero from '../../components/Hero/Hero'
import './Home.css'
import card1 from '../../assets/pngegg.png'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div className='ne-home'>
        <Hero/>
        <div className="featured-collection">
            <h1 className="featured-title">Featured Collection</h1>
            <div className="featured-container">
            <FeaturedCard  defaultImage={card1} hoverImage='' card_info_head='Kachins Signature Collection' card_info_subhead='Burnt Olive Green Suit' />
            </div>
            <div className="all-producr-btn-con">
              <Link to='/AllProduct' className="All-product">View All Product</Link>
            </div>
        </div>
        <div className="Product-container">
          <div className="product-card">
            
          </div>
        </div>
    </div>
  )
}

export default Home