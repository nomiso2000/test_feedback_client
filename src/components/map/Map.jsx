import styled from 'styled-components';
import map from '../../img/mapp.png';
import red from '../../img/red.svg';
import yellow from '../../img/yellow.svg';
import Smile from '../smiles/Smile';
const StyledContainer = styled.div`
  width: 50%;
  height: 100vh;
  position: relative;
  overflow: hidden;
  @media ${(props) => props.theme.media.tablet} {
    display: none;
  }
  @media ${(props) => props.theme.media.phone} {
    display: none;
  }
`;
const StyledMap = styled.div`
  background-image: url(${map});
  border-radius: 50%;
  position: absolute;
  width: 116%;
  height: 110%;
  background-size: contain;
  right: -320px;
  top: -96px;
  z-index: 102;
`;
function Map() {
  return (
    <StyledContainer>
      <StyledMap>
        <Smile img={red} bottom={'18%'} left={'-6%'} />
        <Smile
          img={yellow}
          bottom={'32%'}
          left={'-6%'}
          width={'100px'}
          height={'100px'}
        />
      </StyledMap>
    </StyledContainer>
  );
}

export default Map;
