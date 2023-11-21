// import albumImage from './../img/like/like_image.png';
import albumImage1 from './../img/like/music/albumImage1.png';
import albumImage2 from './../img/like/music/albumImage2.png';
import albumImage3 from './../img/like/music/albumImage3.png';
import albumImage4 from './../img/like/music/albumImage4.png';
import albumImage5 from './../img/like/music/albumImage5.png';
import albumImage6 from './../img/like/music/albumImage6.png';
import albumImage7 from './../img/like/music/albumImage7.png';
import albumImage8 from './../img/like/music/albumImage8.png';
import albumImage9 from './../img/like/music/albumImage9.png';
import albumImage10 from './../img/like/music/albumImage10.png';
import track1 from './../img/like/music/1.mp3';
import track2 from './../img/like/music/2.mp3';
import track3 from './../img/like/music/3.mp3';
import track4 from './../img/like/music/4.mp3';
import track5 from './../img/like/music/5.mp3';
import track6 from './../img/like/music/6.mp3';
import track7 from './../img/like/music/7.mp3';
import track8 from './../img/like/music/8.mp3';
import track9 from './../img/like/music/9.mp3';
import track10 from './../img/like/music/10.mp3';

import playIcon from './../img/like/music/play.png'
import pauseIcon from './../img/like/music/pause.png'
import forward from './../img/like/music/fast-forward.png'

const iconList = [
  <img src={playIcon} alt='play_icon'/>,
  <img src={pauseIcon} alt='pause_icon'/>,
  <img src={forward} alt='pause_icon'/>
]

const audioList = [
  {
    trackNumber: '1',
    track: 'shine your light',
    artist: '박효신',
    link: track1,
    albumImage: albumImage1,
  },
  {
    trackNumber: '2',
    track: 'sunshine',
    artist: '짙은',
    link: track2,
    albumImage: albumImage2,
  },
  {
    trackNumber: '3',
    track: '너의 바다',
    artist: '호피폴라',
    link: track3,
    albumImage: albumImage3,
  },
  {
    trackNumber: '4',
    track: 'love is all',
    artist: '검정치마',
    link: track4,
    albumImage: albumImage4,
  },
  {
    trackNumber: '5',
    track: '백년해로',
    artist: '선우정아',
    link: track5,
    albumImage: albumImage5,
  },
  {
    trackNumber: '6',
    track: 'Day 1',
    artist: 'HONNE',
    link: track6,
    albumImage: albumImage6,
  },
  {
    trackNumber: '7',
    track: 'Outrunning Karma',
    artist: 'Alec Benjamin',
    link: track7,
    albumImage: albumImage7,
  },
  {
    trackNumber: '8',
    track: 'Gooey',
    artist: 'Glass Animals',
    link: track8,
    albumImage: albumImage8,
  },
  {
    trackNumber: '9',
    track: 'Morning Coffee',
    artist: 'Jesper Munk',
    link: track9,
    albumImage: albumImage9,
  },
  {
    trackNumber: '10',
    track: 'On hold',
    artist: 'The xx',
    link: track10,
    albumImage: albumImage10,
  },
];

const audioData = {
  iconList,
  audioList
}
export default audioData;