import styled from 'styled-components';

const StyledCloud = styled.div`
  background-image: ${(props) => `url(${props.img})`};
  position: absolute;
  width: ${(props) => props.width || '214px'};
  height: ${(props) => props.height || '208px'};
  background-size: ${(props) => props.backgroundSize || 'contain'};
  left: ${(props) => props.left || '0%'};
  top: ${(props) => props.top || '0%'};
  z-index: ${(props) => props.index || '100'};
  @media ${(props) => props.theme.media.tablet} {
    display: none;
  }
  @media ${(props) => props.theme.media.phone} {
    display: none;
  }
`;
function Cloud(props) {
  return <StyledCloud {...props} />;
}

export default Cloud;
