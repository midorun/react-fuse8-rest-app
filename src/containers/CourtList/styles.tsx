import styled from 'styled-components/macro';

export const Wrapper = styled.div`
  margin-top: 46px;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CourtListWrapper = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px 15px;

  @media (max-width: 1023px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 30px 10px;
  }

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
    gap: 20px 15px;
  }
`

export const Button = styled.button`
  margin-top: 60px;
  width: 150px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #D8D8D8;
  border-radius: 25px;
  font-weight: 700;
  font-size: 16px;
  letter-spacing: -0.3px;
  color: #363636;
  cursor: pointer;

  .icon{
    margin-left: 10px;
    width: 4px;
    height: 15px;
    /* border: 2px solid #363636; */
  }
`