import React, { useRef } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import facebook from '../../img/facebook.svg';
import twitter from '../../img/twitter.svg';
import patreon from '../../img/patreon.svg';
import linkedin from '../../img/linkedin.svg';
import red from '../../img/red.svg';
import yellowSmall from '../../img/yellowSmall.svg';
import green from '../../img/green.svg';
import Smile from '../smiles/Smile';
import MediaLink from '../mediaLink/Link';

const StyledContainer = styled.div`
  width: 100%;
  height: 160px;
  background: #fafafa;
  border: 1px solid #d8d8d8;
  position: relative;
  overflow: hidden;
`;
const StyledLinkContainer = styled.div`
  display: flex;
  position: absolute;
  top: 50%;
  left: 30%;
  z-index: 100;
  width: 140px;
  justify-content: space-between;
  @media ${(props) => props.theme.media.tablet} {
    top: 50%;
    left: calc(50% - 70px);
  }
  @media ${(props) => props.theme.media.phone} {
    top: 50%;
    left: calc(50% - 70px);
  }
`;
function Footer() {
  return (
    <StyledContainer>
      <StyledLinkContainer>
        <MediaLink
          img={patreon}
          width={'13px'}
          height={'14px'}
          href="https://www.pinterest.com"
        />
        <MediaLink
          img={twitter}
          width={'16px'}
          height={'12px'}
          href="https://twitter.com/?lang=uk"
        />
        <MediaLink
          img={linkedin}
          width={'13px'}
          height={'13px'}
          href="https://www.linkedin.com"
        />
        <MediaLink
          img={facebook}
          width={'8px'}
          height={'16px'}
          href="https://uk-ua.facebook.com/"
        />
      </StyledLinkContainer>
      <Smile img={red} bottom={'-20%'} left={'6%'} />
      <Smile
        img={yellowSmall}
        width={'90px'}
        height={'120px'}
        bottom={'20%'}
        left={'95%'}
        backgroundSize={'auto'}
      />
      <Smile
        img={green}
        width={'78px'}
        height={'97px'}
        bottom={'40%'}
        left={'85%'}
        backgroundSize={'auto'}
      />
    </StyledContainer>
  );
}

export default Footer;
