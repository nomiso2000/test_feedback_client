import styled from 'styled-components';

const StyledSmileRed = styled.div`
  background-image: ${(props) => `url(${props.img})`};
  position: absolute;
  width: ${(props) => props.width || '214px'};
  height: ${(props) => props.height || '208px'};
  background-size: ${(props) => props.backgroundSize || 'contain'};
  left: ${(props) => props.left || '0%'};
  bottom: ${(props) => props.bottom || '0%'};
  z-index: ${(props) => props.index || '100'};
  @media ${(props) => props.theme.media.tablet} {
    display: none;
  }
  @media ${(props) => props.theme.media.phone} {
    display: none;
  }
`;
function Smile(props) {
  return <StyledSmileRed {...props} />;
}

export default Smile;
