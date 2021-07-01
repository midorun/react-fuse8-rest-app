import React, { FC } from 'react'
import styled from 'styled-components/macro';

interface FilterProps {
  changeFilterValue: (value: string) => void
  value: string
}

const Filter: FC<FilterProps> = ({ value, changeFilterValue }) => {
  return (
    <Wrapper>
      <SpanStyled>Filter</SpanStyled>
      <InputStyled type="text" value={value} onChange={(e) => changeFilterValue(e.target.value)} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin-top: 38px;
  width: 39.583%;
  display: flex;
  align-items: center;
  font-weight: 700;
  font-size: 16px;
  letter-spacing: -0.3px;
  color: #363636;

  @media (max-width: 1023px){
    width: 50%;
  }

  @media (max-width: 767px){
    width: 100%;
  }
`

const SpanStyled = styled.span`
  padding-right: 15px;
`

const InputStyled = styled.input`
  padding-left: 15px;
  width: 420px;
  height: 50px;
  border: 1px solid #D8D8D8;
  border-radius: 25px;
  font-size: 18px;

  @media (max-width: 1023px){
    height: 40px
  }

  @media (max-width: 767px){
    height: 30px;
  }
`

export default Filter
