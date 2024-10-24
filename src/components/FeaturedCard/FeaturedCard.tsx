import React, { useState } from 'react';
import './FeaturedCard.css';
interface FeaturedCardProps{
    defaultImage:string;
    hoverImage:string;
    card_info_head:string;
    card_info_subhead:string;
}
const FeaturedCard :React.FC<FeaturedCardProps>= ({ defaultImage, hoverImage,card_info_head,card_info_subhead }) => {
  const [currentImage, setCurrentImage] = useState(defaultImage);

  // Function to handle mouse enter (hover)
  const handleMouseEnter = () => {
    setCurrentImage(hoverImage); // Set hover image when mouse enters
  };

  // Function to handle mouse leave
  const handleMouseLeave = () => {
    setCurrentImage(defaultImage); // Revert to default image when mouse leaves
  };

  return (
    <div className='FeaturedCard'>
        <div
      className="Our_Offers_Card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src={currentImage} alt="Offer" />
    </div>
      <div className="ne-card-info">
        <p className='ne-card-info-head'>{card_info_head}</p>
        <p className='ne-card-info-subhead'>{card_info_subhead}</p>
      </div>
    </div>
  );
};

export default FeaturedCard;
