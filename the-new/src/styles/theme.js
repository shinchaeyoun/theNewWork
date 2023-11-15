import bgImg from './../img/bg.jpg'
import bgNone from './../img/bgNone.jpg'

const backgroundImg = bgImg;
const backgroundNoneImg = bgNone;

const colors = {
  mainColor: '#222',
  pointColor: '#d0021b',
  bgColor: '#edf2f6',
  gray: '#a0aec0',
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

export const monoTheme = {
  colors,fonts,
  bgi: backgroundNoneImg,
  bgColor: '#fff'
};

export const colorTheme = {
  colors,fonts,
  bgColor: '#282c35',
  bgi: backgroundImg,
  pointColor: '#d0021b'

};

const theme = {
  monoTheme,
  colorTheme
};


export default theme;