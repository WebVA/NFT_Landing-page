import React, { useState } from "react";
import Slider from "react-slick";
import "./style.css";
import NFTCard from "components/NFT/NFTCard";
import styled from "styled-components";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const SliderNFT = ({ nfts, slidesToShow = 3 }) => {
  const [selectedItem, setSelectedItem] = useState(0);

  const handleDragStart = e => {
    e.preventDefault();
  }

  return (
    <Container>
      <AliceCarousel
        mouseTracking
        infinite={true}
        responsive={{
          0: {
            items: 3
          },
          768: {
            items: 4
          }
        }}
        onSlideChange={(e) => {
          window.fullpage_api.setAllowScrolling(false)
        }}
        onSlideChanged={(e) => {
          window.fullpage_api.setAllowScrolling(true);
          setSelectedItem(e.item);
        }}
        disableDotsControls={true}
        disableButtonsControls={true}
        keyboardNavigation={true}
      >
        {
          nfts.map((nft, index) => {
            return (
              <img src={"assets/images/nft/" + nft + '.png'} key={'slidernft' + index} style={{height: `${selectedItem == index - 1 ? '200px' : selectedItem == 15 && index == 0 ? '200px' : '145px'}`, width: `${selectedItem == index - 1 ? '200px' : selectedItem == 15 && index == 0 ? '200px' : '80%'}`}} onDragStart={e => handleDragStart(e)}></img>
            )
          })
        }
      </AliceCarousel>
    </Container>

  );
};

export default SliderNFT;
