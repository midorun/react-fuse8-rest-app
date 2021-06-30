import React from 'react'
import styled from 'styled-components/macro';
import image from '../../Image.jpg';

type LabelProps = {
  livingType: 'IndependentLiving' | 'SupportAvailable'
}

const CourtItem = () => {
  return (
    <Wrapper>
      <ImageWrapper>
        <Image src={image} />
        <Label livingType="IndependentLiving">Independent living</Label>
      </ImageWrapper>
      <Description>
        <Title>Brunlees Court</Title>
        <Address>19-23 Cambridge Road, Southport</Address>
        <Price>New Properties for Sale from <b>£214,999</b></Price>
        <AdditionalInfo>Shared Ownership Available</AdditionalInfo>
      </Description>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 380px;
  height: 380px;
  background: #F8F8F8;
  border: 1px solid #D8D8D8;

  span:not(:first-child){
    margin-top: 10px;
  }
`
export const ImageWrapper = styled.div`
  position: relative;
  width: 378px;
  height: 230px;
`;

const Image = styled.img`
  max-width: 100%;
  height: 230px;
`

export const Label = styled.span<LabelProps>`
  padding: 0 10px;
  height: 30px;
  position: absolute;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  font-weight: 700;
  font-size: 12px;
  text-align: center;
  background-color: ${({ livingType }) => livingType === 'IndependentLiving' ?
    '#006F79' :
    '#EC6608'
  };
`;

const Description = styled.div`
  padding: 0 20px;
  width: 380px;
  height: 150px;
  display: flex;
  flex-direction: column;
  font-size: 16px;
  color: #363636;
`

const Title = styled.span`
  margin-top: 20px;
  font-weight: 700;
  font-size: 20px;
`

const Address = styled.span`
`

const Price = styled.span`

`

const AdditionalInfo = styled.span``

export default CourtItem
