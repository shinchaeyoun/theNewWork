import { useMediaQuery } from "react-responsive";

export const Desktop = ({children}) => {
  const isDesktop = useMediaQuery({ minWidth: 1024 });
  return isDesktop ? children : null;
};

export const Tablet = ({children}) => {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
  return isTablet ? children : null;
};

export const Mobile = ({children}) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return isMobile ? children : null;
};

// mobile이 아닐 때만 출력되는 컴포넌트
export const Default = ({children}) => {
  const isNotMobile = useMediaQuery({ minWidth: 768 });
  return isNotMobile ? children : null;
};