import React from "react";
import ArticleDecorator from "components/textDecorator/ArticleDecorator";
import TextDecorator from "components/textDecorator/TextDecorator";
import styled from "styled-components";
import NFTCard from "components/NFT/NFTCard";
import SliderNFT from "components/SliderNFT/SliderNFT";


const Container = styled.div`
  width: 100vw;
  height: ${(props) => props.height}px;
  background-image: url("assets/images/backgrounds/2560/section3.png");
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  background-position: center bottom;
  @media (max-width: 1920px) {
    background-image: url("assets/images/backgrounds/1920/section3.png");
  }
  @media (max-width: 1440px) {
    background-image: url("assets/images/backgrounds/metaverse.png");
  }
  @media (max-width: 1400px) {
    align-items: end;
  }
  @media (max-width: 1280px) {
    background-image: url("assets/images/backgrounds/1280/section3.png");
  }
  @media (max-width: 490px) {
    background-image: url("assets/images/backgrounds/mobile/section3.png");
  }
`;
const PageContainer = styled.div`
  height: ${(props) => props.height - 194}px;
  @media (max-width: 1400px) {
    height: ${(props) => props.height - 94}px;
  }
`;
const BodyContainer = styled.div`
  max-width: 1800px;
  width: calc(100vw - 120px);
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  @media (max-width: 1200px) {
    flex-direction: column;
    flex-direction: column-reverse;
  }
  @media (max-width: 768px) {
    height: ${(props) => props.height - 60}px;
    justify-content: flex-end;
    width: calc(100vw - 48px);
  }
`;
const LeftContainer = styled.div`
  width: 45%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  @media (max-width: 1200px) {
    width: 100%;
  }
`;
const RightContainer = styled.div`
  max-width: 700px;
  display: flex;
  overflow: auto;
  scrollbar-width: none;
  height: ${(props) => props.height - 194}px;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 50px;
  @media (max-width: 1400px) {
    margin-top: -50px;
  }

`;
const MobileNFTContainer = styled.div`
    display: flex;
    justify-content: center;
    height: fit-content;
    width:100%;
`;
const FooterContainer = styled.div`
  display: none;
  @media (max-width: 490px) {
    display: block;
    height: 52px;
  }
`;
const nfts = [
  "sky islands",
  "aether sands",
  "arkterra",
  "thousand lakes",
  "sylvan rest",
  "ocean side",
  "corsair",
  "meta prime",
  "overwatch",
  "hyloria",
  "crystal v.",
  "motherboard",
  "singularity",
  "solace",
  "pyromount",
  "el dorado",
];

export default function Metaverse({ size }) {
  const content = "Aetherya is a land filled with wondrous beauty, untold opportunity, and ancient secrets waiting to be explored. It is the only known place in the galaxy where the Aether Crystals, a source of tremendous power, can be found. Once the home of a long-lost and highly advanced race known as The Kroatons, the Metagalactic Alliance has claimed Aetherya and pledged to protect and preserve it. However, there are dark secrets hidden here that may threaten the entire multiverse.";

  const handleWheel = (e) => {
    e.stopPropagation();
  };
  const handleDragStart = (e) => e.preventDefault();
  return (<Container height={size.height}>
    <PageContainer height={size.height}>
      <BodyContainer height={size.height}>
        <LeftContainer>
          {size.width < 1200 ? <MobileNFTContainer>
            <SliderNFT nfts={nfts} slidesToShow={5} />
          </MobileNFTContainer> : <></>}
          <TextDecorator uppercase="none" content="the Metaverse" direction="up" fontFamily="Kusanagi" fontSize={32}></TextDecorator>
          <div style={{ height: "14px" }}></div>
          <ArticleDecorator content={content} fontFamily="Roboto" fontSize={16} lineHeight={22.4} width={size.width > 1600 ? "732px" : size.width < 490 ? "342px" : "493px"}></ArticleDecorator>
        </LeftContainer>
        {
          size.width > 1200 ? <RightContainer height={size.height} onWheel={(e) => handleWheel(e)}>
            {
              nfts.map((name, index) => {
                return (<NFTCard key={index} name={name} />)
              })
            }
          </RightContainer> : <></>
        }
        <FooterContainer />
      </BodyContainer>
    </PageContainer>
  </Container>)

}
