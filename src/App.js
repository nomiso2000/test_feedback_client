import styled from 'styled-components';
import Form from './components/form/Form';
import Footer from './components/footer/Footer';
import Map from './components/map/Map';
import yellowSmall from './img/yellowSmall.svg';
import cloud from './img/cloud.svg';
import Smile from './components/smiles/Smile';
import Cloud from './components/cloud/Cloud';

const StyledContainer = styled.div`
  width: 100%;
`;
const ContentContainer = styled.div`
  display: flex;
`;
function App() {
  return (
    <>
      <StyledContainer>
        <ContentContainer>
          <Cloud
            img={cloud}
            width={'219px'}
            height={'164px'}
            top={'400px'}
            left={'-102px'}
          />
          <Cloud
            img={cloud}
            width={'219px'}
            height={'164px'}
            top={'526px'}
            left={'343px'}
          />
          <Cloud
            img={cloud}
            width={'219px'}
            height={'164px'}
            top={'101px'}
            left={'775px'}
          />
          <Smile
            img={yellowSmall}
            width={'88px'}
            height={'85px'}
            bottom={'86%'}
            left={'30px'}
          />
          <Form></Form>
          <Map></Map>
        </ContentContainer>
        <Footer></Footer>
      </StyledContainer>
    </>
  );
}

export default App;
