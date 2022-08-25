import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 312.33px;
    height: 140.19px;
    background-image: url('assets/images/card/not available mid.png');
    background-size: cover;
    @media (max-width: 1280px) {
        width: 222.78px;
        height: 100px;
    }
    @media (max-width: 490px) {
        width: 202.87px;
        height: 91.07px;
    }
`

const CoverImage = styled.img`
    cursor: pointer;
    width: 100%;
    height: 100%;
`

export default function NFTCard ({available}) {
    return (
        <Container>
            {
                available ? <CoverImage width={'100%'} height='100%' src="assets/images/card/Frame.png"></CoverImage> : ''
            }
        </Container>
    )
}