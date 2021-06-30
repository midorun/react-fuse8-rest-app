import styled from 'styled-components';
import CourtList from "../CourtList";
import Filter from '../Filter';

function App() {
  return (
    <Wrapper>
      <Container>
        <Header>Our Latest Developments</Header>
        <Filter />
        <CourtList />
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding-top: 100px;
  height: 100vh;
  background-color: #fff;
`

const Container = styled.div`
  margin: 0 auto;
  padding: 0 10px;
  width: 1200px;
`

const Header = styled.h1`
  font-weight: bold;
  font-size: 36px;
  text-align: center;
  color: #45852D;
`

export default App;
