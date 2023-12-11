import bgImg from './../img/bg.jpg'
import bgNone from './../img/bgNone.jpg'

const backgroundImg = bgImg;
const backgroundNoneImg = bgNone;

const colors = {
  mainColor: '#222',
  pointColor: '#d0021b',
  bgColor: '#edf2f6',
  gray: '#a9a9a9',
  lightGray: '#d3d3d3',
  subGray: '#5a5a5a',
  darkGray: '#2d3748',
};

const fonts = {
  outfit: 'Outfit, sans-serif',
  poppins: 'Poppins, sans-serif',
  ubuntu: 'Ubuntu, sans-serif',
  assistant : 'Assistant, sans-serif',
  nanum : 'Nanum Myeongjo, serif',
  chomsky: 'Chomsky'
};
const size = {
  mobile: '767px',
  tablet: '999px',
  desktop: '1000px',
}
const media = {
  desktop: `(min-width: ${size.desktop})`,
  tablet: `(max-width: ${size.tablet})`,
  mobile: `(max-width: ${size.mobile})`
}
export const monoTheme = {
  colors,fonts,media,
  bgi: backgroundNoneImg,
  bgColor: '#fff',
  pointColor: '#222',
  btnColor: '#d3d3d3',
};

export const colorTheme = {
  colors,fonts,media,
  bgColor: '#282c35',
  bgi: backgroundImg,
  pointColor: '#d0021b',
  btnColor: '#d0021b',
};

const theme = {
  monoTheme,
  colorTheme
};


export default theme;