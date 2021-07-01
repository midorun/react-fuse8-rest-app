import styled from 'styled-components/macro';

export const Wrapper = styled.div`
  padding-top: 100px;
  height: 100vh;
  background-color: #fff;
`

export const Container = styled.div`
  margin: 0 auto;
  padding: 0 10px;
  max-width: 1200px;

  @media screen and (max-width: 767px){
    max-width: 550px;
  }
`

export const Header = styled.h1`
  font-weight: bold;
  font-size: calc(24px + (36 - 24) * ((100vw - 320px) / (1200 - 320)));
  text-align: center;
  color: #45852D;
`