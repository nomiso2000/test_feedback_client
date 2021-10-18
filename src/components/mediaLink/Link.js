import styled from 'styled-components';

const StyledLink = styled.a`
  background-image: ${(props) => `url(${props.img})`};
  width: ${(props) => props.width || '214px'};
  height: ${(props) => props.height || '208px'};
`;
function Link(props) {
  return <StyledLink {...props} />;
}

export default Link;
