import styled from 'styled-components/macro';
import { CourtTypeProps } from '../../types';

export const Wrapper = styled.li`
  padding-bottom: 20px;
  background: #F8F8F8;
  border: 1px solid #D8D8D8;
  cursor: pointer;

  span:not(:first-of-type){
    margin-top: 10px;
  }
`

export const ImageWrapper = styled.div`
  position: relative;
  height: 60.526%;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
`

export const CourtType = styled.span<CourtTypeProps>`
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
  background-color: ${({ courtType }) => courtType === 'IndependentLiving' ?
    '#006F79' :
    '#EC6608'
  };
`;

export const Description = styled.div`
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  font-size: 16px;
  color: #363636;

  @media (max-width: 375px){
    font-size: 13px;
  }
`

export const Title = styled.span`
  margin-top: 20px;
  font-weight: 700;
  font-size: 20px;
`

export const Address = styled.span`
`

export const Price = styled.span`

`

export const AdditionalInfo = styled.span``
