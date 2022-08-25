import React from 'react'
import styled from 'styled-components'
import { LandingContext } from 'contexts/LandingContext'
import ProgressiveImage from './ProgressiveImage';
 
const Container =  styled.div`
    margin-bottom: 5px;
    width: 165.34px;
    height: 181.63px;
    display:flex;
    flex-direction:column ;
    align-items:center;
    color:white;
    font-family: 'Kusanagi';
    font-size: 8.6px;
    line-height:140% ;
    text-transform:uppercase ;
    justify-content: center;
`;

const Name =  styled.div`
    margin-top: 3px;
    text-align:center ;
`;

const NFTCard =  ({name}) => {
    const {setMetaverseModalOpen, setModalInfo} = React.useContext(LandingContext);
    return(<Container>
        <ProgressiveImage src={name + '.png'} placeholder={'lowResolution/' + name + '.png'} callback={() => { setMetaverseModalOpen(true); setModalInfo({ imgUrl: name, title: name }) }} alt={"metagate"}></ProgressiveImage>
        <Name>{name}</Name>
    </Container>)
}

export default NFTCard