import React from 'react';
import styled, { keyframes } from 'styled-components';
import ArticleDecorator from 'components/textDecorator/ArticleDecorator';
import TextDecorator from 'components/textDecorator/TextDecorator';
import MetaButton from 'components/buttons/MetaButton';
import Button from 'components/buttons/Button';

const ContainerAnimation = keyframes`
    0%{
        -webkit-transform: scale(1.2);
            -ms-transform: scale(1.2);
                transform: scale(1.2);
    }
    100%{
        -webkit-transform: scale(1);
            -ms-transform: scale(1);
                transform: scale(1);
    }
`;
const Container = styled.section`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
            flex-direction: column;
    width: 100%;
    height: ${props =>props.height}px;
    background-image : url('assets/images/backgrounds/2560/section1.png');
    background-image:url(${props=>props.src});
    background-size: cover;
    background-repeat: no-repeat;
    animation: ${ContainerAnimation} 1s ease 1;
    webkit-animation:  ${ContainerAnimation}  1s ease 1;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    background-position: center bottom;
    @media(max-width:1920px){
        background-image : url('assets/images/backgrounds/1920/section1.png');
    }
    @media(max-width:1440px){
        background-image : url('assets/images/backgrounds/welcome.png');
    }
    @media(max-width:1400px){
        justify-content: flex-end;
    }
    @media (max-width: 1280px) {
        background-image: url('assets/images/backgrounds/1280/section1.png');
    }
    @media(max-width:490px){
        background-image : url('assets/images/backgrounds/mobile/section1.png');
    }
`;  
const ButtonArea = styled.div`
    display:-webkit-box;
    display:-ms-flexbox;
    display:flex;
    -webkit-box-orient:horizontal;
    -webkit-box-direction:normal;
    -ms-flex-direction:row;
            flex-direction:row;
    -webkit-box-align:center;
    -ms-flex-align:center;
            align-items:center;
    -webkit-box-pack:start;
    -ms-flex-pack:start;
            justify-content:flex-start;
    width:100%;
    @media(max-width:768px){
        margin-left:0;
    }
`;
const ButtonEffectAnimation = keyframes`
    0%{
        opacity:0;
    }
    40%{
        opacity:0.9;
    }
    60%
    {
        opacity: 0.2;
    }
    70%
    {
        opacity: 0.9;
    }
    80%
    {
        opacity: 0.2;
    }
    100%{
        opacity: 1;
    }
`;
const ButtonEffect = styled.div`
    -webkit-animation: ${ButtonEffectAnimation} 0.27s both  ease-in ;
    animation: ${ButtonEffectAnimation} 0.27s both  ease-in ;
    -webkit-animation-delay: ${props => props.time}s;
            animation-delay: ${props => props.time}s;
    opacity:1;
    margin-left: 64px;
    @media (max-width: 700px) {
        margin-left: 0px;
    }
`;
const ArticleContainer = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
            flex-direction: column;
    width: 666px;
    @media (max-width: 1920px) {
        width: 419px;
    }
    @media (max-width: 490px) {
        width: 280px;
    }
`;
const BodyContainer = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
            flex-direction: column;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
            justify-content: center;
    width: 724px;
    height:  ${props =>props.height -194}px;
    @media (max-width: 1400px) {
        width: 506px;
    }
    @media (max-width: 490px) {
        -webkit-box-pack: end;
            -ms-flex-pack: end;
                justify-content: flex-end;
                
    }
`;
const WelcomeBodyContainer = styled.div`
    width: calc(100vw - 120px);
    max-width: 1800px;
    @media (max-width: 768px) {
        width: calc(100vw - 48px);
    }
`;
const Mark =  styled.svg`
    width:48px;
    height:95px;
    margin-right:24px;
    margin-top:20px;
    @media(max-width:1400px){
        margin-top:11px;  
    }

`;
const PageContainer =  styled.div`
    height: ${props =>props.height -194}px;
    display:flex;
    justify-content:center;
    align-items:center;
    @media(max-width:1400px){
        height: ${props =>props.height -94}px;
    }
`;
const FooterContainer =  styled.div`
     display:none;
     @media(max-width:490px) {
         display:block;
         height:52px;
     }
`;

export default function Welcome({size}) {
    const content = 'Journey through the METAGATE and explore lucrative opportunities in the web3 multiverse. Our ground-breaking launchpad offers early access to exclusive IMOs and NFT collection drops, only at METAGATE.'
    return (
        <Container id="testing" height={size.height}>
            <PageContainer height={size.height}>
                <WelcomeBodyContainer  >
                    <BodyContainer height={size.height}>
                        <TextDecorator uppercase="none" delay={0.5} direction='up' content='welcome to' fontFamily='Kusanagi' fontSize={size.width <= 550 ? 24 : size.width <= 1280 ? 40 : 54}></TextDecorator>
                        <TextDecorator delay={0.5} direction='down' content='metagate' fontFamily='Kusanagi' fontSize={size.width <= 550 ? 29 : size.width <= 1280 ? 56 : 64}></TextDecorator>
                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <Mark>
                            <path opacity="0.5" fillRule="evenodd" clipRule="evenodd" d="M41.9619 45.3249V49.3486H41.8475L41.8475 94.7136H8.28008e-06L0 0.00049194L41.8475 0.000488281L41.8475 45.3249H41.9619ZM8.80677 92.4143H12.5143L12.5143 26.8157L8.80677 23.1024L8.80677 92.4143ZM14.8136 92.4143L39.5309 92.4143L39.5309 59.2242L14.8136 59.2242L14.8136 92.4143ZM14.8136 56.9249L39.5309 56.9249V53.861L14.8136 29.1437L14.8136 56.9249ZM39.5309 2.25938L32.4836 2.25938L32.4836 35.6794L39.5309 42.7267L39.5309 2.25938ZM30.1843 2.25938L2.22496 2.25938L2.22496 5.42089L30.1843 33.3801L30.1843 2.25938ZM39.5309 45.9803L2.22496 8.66858L2.22496 13.3189L39.5309 50.6247V45.9803ZM6.78914 21.1365L2.22496 16.5666L2.22496 92.4143H6.49023L6.49022 21.1365H6.78914Z" fill="white" />
                        </Mark>
                            <ArticleDecorator delay={1} content={content} fontFamily='Roboto' fontSize={16} lineHeight={22.4} width={size.width <= 490 ? '280px' : 'fit-content'}></ArticleDecorator>
                        </div>
                        <ButtonArea>
                            <div>
                                <ButtonEffect time={1}>
                                    <MetaButton marginTop={'5vh'} background={'#FF1C6E'} content='EXPLORE NOW' />
                                </ButtonEffect>
                            </div>
                        </ButtonArea>
                        <FooterContainer />
                    </BodyContainer>
                </WelcomeBodyContainer>
            </PageContainer>
        </Container>
    )
}
