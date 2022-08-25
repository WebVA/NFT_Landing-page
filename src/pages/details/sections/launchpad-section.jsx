import React from 'react';
import styled, { keyframes } from 'styled-components';
import NFTCard from 'components/cards/NFTCard';
import Card from 'components/cards/Card';

const LaunchpadContainer = styled.div`
    width: calc(100vw - 120px);
    height: ${props=>props.height -194}px;
    padding-top: 116px;
    padding-bottom: 78px;
    padding-left: 60px;
    padding-right: 60px;
    background-image: url('assets/images/backgrounds/2560/section2.png');
    background-size: cover;
    background-position: center bottom;
    @media(max-width:1920px){
        background-image : url('assets/images/backgrounds/1920/section2.png');
    }
    @media(max-width:1440px){
        background-image: url('assets/images/backgrounds/launchpad.png');
    }
    @media (max-width: 1280px) {
        background-image: url('assets/images/backgrounds/1280/section2.png');
    }
    @media (max-width: 768px) {
        
        padding-left: 24px;
        padding-right: 24px;
    }
    @media(max-width:490px){
        width: calc(100vw - 48px);
        background-image : url('assets/images/backgrounds/mobile/section2.png');
    }
`;
const BodyContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    @media (max-width: 1280px) {
        flex-direction: row;
        justify-content: space-between;
    }
    @media (max-width: 768px) {
        height: fit-content;
        flex-direction: column;
        justify-content: flex-start;
    }
    @media (max-width: 490px) {
        height:  ${props =>props.height -194}px;
    }
`;
const BodyTopContainer = styled.div`
    width: 983px;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 40.31px;
    @media (max-width: 1280px) {
        align-items: flex-start;
        margin-bottom: 0px;
        min-width: 429px;
        width: 429px;
    }
    @media (max-width: 768px) {
        margin-bottom: 40.31px;
        align-items: center;
    }
    @media (max-width: 490px) {
        min-width: 342px;
        width: 342px;
    }
    @media (max-height: 700px) {
        margin-bottom: 3px;
    }
`;
const TopTitle = styled.div`
    font-size: 32px;
    line-height: 38.4px;
    text-transform:none;
    color: white;
    font-family: 'Kusanagi';
    @media (max-width: 490px) {
        font-size: 24px;
        line-height: 28.8px;
    }
`;
const TopContent = styled.div`
    font-size: 16px;
    font-family: 'Roboto';
    line-height: 22.4px;
    color: white;
    text-align: center;
    @media (max-width: 1280px) {
        text-align: left;
    }
    @media (max-width: 768px) {
        text-align: center;
    }
    @media (max-width: 490px) {
        font-size: 12px;
        line-height: 16.8px;
        margin-top: 16px;
        text-align: center;
    }
    @media (max-height: 700px) {
        margin-top: 3px;
    }
`;
const BodyBottomContainer = styled.div`
    width: 981.59px;
    height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media (max-width: 1920px) {
        width: 1185.33px;
    }
    @media (max-width: 1440px) {
        width: 981.59px;
    }
    @media (max-width: 1280px) {
        width: calc(100% - 478px);
    }
    @media (max-width: 768px) {
        width: 100%;
    }
`;
const MidContainer = styled.div`
    width: 100%;
`;
const NFTCardContainerTitle = styled.div`
    font-family: 'Kusanagi';
    font-size: 24px;
    color: white;
    text-align: center;
    margin-bottom: 15.15px;
    @media (max-width: 1280px) {
        font-size: 20px;
        text-align: left;
    }
    @media (max-width: 768px) {
        text-align: center;
    }
    @media (max-width: 490px) {
        font-size: 18px;
        text-align:left;
    }
    @media (max-height: 700px) {
        margin-bottom: 3px;
    }
`;
const NFTCardBoxScrollablePanel = styled.div`
    width: 100%;
    overflow-x: scroll;
    overflow-y: hidden;
    -webkit-overflow-scrolling: touch;  
    scrollbar-width: none;
`;
const NFTCardContainer = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
            flex-direction: row;
    width: 981.59px;
    height: fit-content;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
            justify-content: space-between;
    @media (max-width: 1920px) {
        width: 1185.33px;
    }
    @media (max-width: 1440px) {
        width: 981.59px;
    }
    @media (max-width: 1280px) {
        width: 684.34px
    }
    @media (max-width: 490px) {
        width: 658.26px;
    }
`;
const NFTCardAnimationEffect = keyframes`
    0% {
        opacity: 0;
        transform: scale(0);
    }
    100% {
        opacity: 1;
        transform: scale(1);
    }
`;
const NFTCardAnimation = styled.div`
    opacity: 0;
    animation: ${props => props.index === 1 ? NFTCardAnimationEffect : ''} 1s ${props => props.delay}s ease 1;
    animation-fill-mode: forwards;
`;
const BottomContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 40.85px;
    scrollbar-width: none;
    @media (max-width: 1280px) {
        align-items: flex-start;
    }
    @media (max-height: 700px) {
        margin-top: 3px;
    }
`;
const BottomTitleAnimation = keyframes`
    0% {
        transform: translateY(150%);
        opacity: 0;
    }
    100% {
        transform: translateY(0px);
        opacity: 1
    }
`;
const BottomTitle = styled.div`
    font-size: 32px;
    line-height: 38.4px;
    color: white;
    font-family: 'Kusanagi';
    opacity: 0;
    text-align: center;
    animation: ${props => props.index === 1 ? BottomTitleAnimation : ''} 1s ${props => props.delay}s ease 1;
    animation-fill-mode: forwards;
    margin-bottom: 16px; 
    @media (max-width: 1280px) {
        font-size: 20px;
        line-height: 28px;
        text-align: left
    }
    @media (max-width: 768px) {
        text-align: center;
    }
    @media (max-width: 490px) {
        text-align: left;
        font-size: 18px;
        line-height: 25.2px;
    }
    @media (max-height: 700px) {
        margin-bottom: 10px;
    }
`;
const CardContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    @media (max-width: 1920px) {
        width: 927px;
    }
    @media (max-width: 1280px) {
        height: 240px;
        transform: scale(0.7193);
        transform-origin: left top;
    }
    @media (max-width: 490px) {
        width: 614px;
        height: 170px;
    }
`;
const CardAnimation = (direction) => keyframes`
    0%{
        opacity: 0;
        transform: ${direction === 'left' ? 'scale(0.8) translateX(-100px)' : 'scale(0.8) translateX(100px)'};
    }
    100% {
        opacity: 1;
        transform: scale(1) translateX(0px);
    }
`;
const CardAnimationSmall = (direction) => keyframes`
    0%{
        opacity: 0;
        transform: ${direction === 'left' ? 'scale(0.4) translateX(-100px)' : 'scale(0.4) translateX(100px)'};
        transform-origin: left top;
    }
    100% {
        opacity: 1;
        transform: scale(0.7) translateX(0px);
        transform-origin: left top;
    }
`;
const CardScale = styled.div`
    width: ${props => props.preview === 'true' ? '486px' : '420px'};
    height: 333px;
    display: flex;
    align-items: center;
    opacity: 0;
    animation: ${props => props.index === 1 ? CardAnimation(props.direction) : ''} 1s 0.8s ease 1;
    animation-fill-mode: forwards;
    @media (max-width: 490px) {
        animation: ${props => props.index === 1 ? CardAnimationSmall(props.direction) : ''} 1s 0.8s ease 1;
        animation-fill-mode: forwards;
        width: 295px;
        height: 290px;
    }
`;
const PreviewCardAnimation = keyframes`
    0%{
        opacity: 0;
        transform: scale(3, 1);
        transform-origin: left top;
    }
    100% {
        opacity: 1;
        transform: scale(1);
        transform-origin: left top;
    }
`;
const PreviewCard = styled.svg`
    opacity: 0;
    animation: ${props => props.index === 2 ? PreviewCardAnimation : ''} 1s 1.3s ease 1;
    animation-fill-mode: forwards;
`;
const BodyBox = styled.div`
    height:  ${props =>props.height -194}px;
    display: flex;
    align-items: flex-end;
    @media(max-width:1400px){
        height:  ${props =>props.height -116}px;
    }

`;
const FooterContainer =  styled.div`
     display:none;
     @media(max-width:490px) {
         display:block;
         height:52px;
     }
`;

export default function Launchpad({ index,size }) {
    const scrollPanel = React.useRef();
    const content = 'Our $MGT token pool will be accessible to all launchpad users through our upcoming Initial Metaverse Offering (IMO) Public Sale.';
    const handleScrollPanel = e => {
        e.stopPropagation();
        scrollPanel.current.scrollLeft = scrollPanel.current.scrollLeft + e.deltaY / 4;
    }

    const handleConnectHelp =() =>{

        window.open('https://forms.gle/A2LdKCzfGqtrYbmP8');
    }
    return (
        <LaunchpadContainer height={size.height}>
            <BodyBox height={size.height}>
                <BodyContainer>
                    <BodyTopContainer>
                        <TopTitle>
                            The launchpad
                        </TopTitle>
                        <TopContent>
                            Metagate’s revolutionary launchpad helps bring new worlds to life. We provide the perfect tools and resources so you can build and release your own metaverse.
                            <br></br>
                            Contact us <u style={{ cursor: 'pointer' }} onClick={handleConnectHelp}>here</u> if you have an exciting idea!
                        </TopContent>
                    </BodyTopContainer>
                    <BodyBottomContainer>
                        <MidContainer>
                            <NFTCardContainerTitle>
                                CHOOSE YOUR METAVERSE
                            </NFTCardContainerTitle>
                            <NFTCardBoxScrollablePanel onWheel={(e) => handleScrollPanel(e)} ref={scrollPanel} onTouchMoveCapture = {(e) =>e.stopPropagation()}>
                                <NFTCardContainer>
                                    <NFTCardAnimation index={index} delay={0.7} onClick={() => window.fullpage_api.moveTo(3)}>
                                        <NFTCard available={true}></NFTCard>
                                    </NFTCardAnimation>
                                    <NFTCardAnimation index={index} delay={0.8}>
                                        <NFTCard></NFTCard>
                                    </NFTCardAnimation>
                                    <NFTCardAnimation index={index} delay={0.9}>
                                        <NFTCard></NFTCard>
                                    </NFTCardAnimation>
                                </NFTCardContainer>
                            </NFTCardBoxScrollablePanel>
                        </MidContainer>
                        <BottomContainer>
                            <BottomTitle index={index} delay={0.6}>
                                upcoming pools
                            </BottomTitle>
                            <CardContainer onTouchMove={(e) => e.stopPropagation()}>
                                <CardScale index={index} preview={'false'} direction={'left'}>
                                    <Card brandImg={'assets/images/brand/metagate.svg'} title='metagate' access={'public'} content={content} totalSupply={'1,000,000,000'} opensIn={'17/03/22'} round={1} tokens={'40,000,000'}></Card>
                                </CardScale>
                                <CardScale index={index} preview={'true'} direction={'right'}>
                                    <Card title={'future pool'} content='We will announce this pool very soon!'></Card>
                                    <PreviewCard index={index} width="62" height="285" viewBox="0 0 62 285" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_7_48)">
                                            <g opacity="0.5" filter="url(#filter0_d_7_48)">
                                                <path d="M33.9185 284.235H22.436H21.1602L33.9185 271.477V284.235Z" fill="white" />
                                            </g>
                                            <g opacity="0.5" filter="url(#filter1_d_7_48)">
                                                <path d="M63.5005 271.493H52.018H50.7422L63.5005 258.735V271.493Z" fill="white" />
                                            </g>
                                            <path opacity="0.5" d="M0 1H33.9165V35.0222V266.373L16.0549 284.235H0.910724" stroke="white" />
                                            <path opacity="0.5" d="M34.346 13.75H61.6691V44.7091V255.231L45.3696 271.485H33.8906" stroke="white" />
                                        </g>
                                        <defs>
                                            <filter id="filter0_d_7_48" x="1.16016" y="251.477" width="52.7583" height="52.7583" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                                <feOffset />
                                                <feGaussianBlur stdDeviation="10" />
                                                <feComposite in2="hardAlpha" operator="out" />
                                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0" />
                                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_7_48" />
                                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_7_48" result="shape" />
                                            </filter>
                                            <filter id="filter1_d_7_48" x="30.7422" y="238.735" width="52.7583" height="52.7583" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                                <feOffset />
                                                <feGaussianBlur stdDeviation="10" />
                                                <feComposite in2="hardAlpha" operator="out" />
                                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0" />
                                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_7_48" />
                                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_7_48" result="shape" />
                                            </filter>
                                            <clipPath id="clip0_7_48">
                                                <rect width="62" height="285" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </PreviewCard>
                                </CardScale>
                            </CardContainer>
                            <FooterContainer />
                        </BottomContainer>
                    </BodyBottomContainer>
                </BodyContainer>
            </BodyBox>


        </LaunchpadContainer>
    )
}

