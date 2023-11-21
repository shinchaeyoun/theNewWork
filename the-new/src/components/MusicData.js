import albumImage from './../img/like/like_image.png';
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

const iconList = [
  <img src={playIcon} alt='play_icon'/>,
  <img src={pauseIcon} alt='pause_icon'/>
]

const audioList = [
  {
    trackNumber: '1',
    track: 'shine your light',
    artist: '박효신',
    link: track1,
    albumImage: albumImage,
  },
  {
    trackNumber: '2',
    track: 'sunshine',
    artist: '짙은',
    link: track2,
    albumImage: albumImage,
  },
  {
    trackNumber: '3',
    track: '너의 바다',
    artist: '호피폴라',
    link: track3,
    albumImage: albumImage,
  },
  {
    trackNumber: '4',
    track: 'love is all',
    artist: '검정치마',
    link: track4,
    albumImage: albumImage,
  },
  {
    trackNumber: '5',
    track: '백년해로',
    artist: '선우정아',
    link: track5,
    albumImage: albumImage,
  },
  {
    trackNumber: '6',
    track: 'Day 1',
    artist: 'HONNE',
    link: track6,
    albumImage: albumImage,
  },
  {
    trackNumber: '7',
    track: 'Outrunning Karma',
    artist: 'Alec Benjamin',
    link: track7,
    albumImage: albumImage,
  },
  {
    trackNumber: '8',
    track: 'Gooey',
    artist: 'Glass Animals',
    link: track8,
    albumImage: albumImage,
  },
  {
    trackNumber: '9',
    track: 'Morning Coffee',
    artist: 'Jesper Munk',
    link: track9,
    albumImage: albumImage,
  },
  {
    trackNumber: '10',
    track: 'On hold',
    artist: 'The xx',
    link: track10,
    albumImage: albumImage,
  },
];

const audioData = {
  iconList,
  audioList
}
export default audioData;