import { createGlobalStyle } from 'styled-components';

import ArabicWoff from './ApercuArabicPro-Regular.woff';

export default createGlobalStyle`
    @font-face {
        font-family: 'Arabic';
        src: local('Font Name'), local('FontName'),
        url(${ArabicWoff}) format('woff');
        font-weight: normal;
        font-style: normal;
    }
`;
