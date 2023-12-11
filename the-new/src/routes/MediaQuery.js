import React from 'react';
import {useMediaQuery} from 'react-responsive';

  // const isDesktop = useMediaQuery({
  //   query: '(min-width: 1024px)',
  // });
  // const isTablet = useMediaQuery({
  //   query: '(min-width: 768px) and (max-width: 1023px)',
  // });
  // const isMobile = useMediaQuery({
  //   query: '(max-width: 767px)'
  // });
  


const Desktop = ({children}) => {
  const isDesktop = useMediaQuery({ minWidth: 1000 });
  return isDesktop ? children : null;
};

const Tablet = ({children}) => {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 999 });
  return isTablet ? children : null;
};

const Mobile = ({children}) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return isMobile ? children : null;
};

// mobile이 아닐 때만 출력되는 컴포넌트
const Default = ({children}) => {
  const isNotMobile = useMediaQuery({ minWidth: 768 });
  return isNotMobile ? children : null;
};

export {Desktop, Tablet, Mobile, Default};