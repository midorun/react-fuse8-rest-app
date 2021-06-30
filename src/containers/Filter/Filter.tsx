import React from 'react'
import styled from 'styled-components';

const Filter = () => {
  return (
    <Wrapper>
      <SpanStyled>Filter</SpanStyled>
      <InputStyled type="text" name="" id="" />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding-top: 38px;
  width: 474px;
  height: 50px;
  display: flex;
  align-items: center;
  font-weight: 700;
  font-size: 16px;
  letter-spacing: -0.3px;
  color: #363636;
`

const SpanStyled = styled.span`
  padding-right: 15px;
`

const InputStyled = styled.input`
  padding-left: 15px;
  width: 418px;
  height: 50px;
  border: 1px solid #D8D8D8;
  border-radius: 25px;
  font-size: 18px;
`

export default Filter
