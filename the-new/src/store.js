/* eslint-disable */
import {
  configureStore,
  createSlice
} from '@reduxjs/toolkit';

let categorys = createSlice({
  name: 'categorys',
  initialState: [
    {
      category_name: 'Main',
      category_link: '/',
      sub_categories: [
        {
          sub_category_name: 'Introduce',
        },
        {
          sub_category_name: 'Like',
        },
        {
          sub_category_name: 'Career',
        },
        {
          sub_category_name: 'Portfolio',
        },
        {
          sub_category_name: 'Contact',
        }
      ],
      content_top_arr : []
    },
    {
      category_name: 'Introduce',
      category_link: '/introduce',
      sub_categories: [
        {
          sub_category_name: 'Greeting',
        },
        {
          sub_category_name: 'Profile',
        },
        {
          sub_category_name: 'Hashtag Story',
        },
        {
          sub_category_name: 'Favorite Message',
        }
      ],
      content_top_arr : []
    },
    {
      category_name: 'Like',
      category_link: '/like',
      sub_categories: [
        {
          sub_category_name: 'Travel',
        },
        {
          sub_category_name: 'Flimeing',
        },
        {
          sub_category_name: 'Movies',
        },
        {
          sub_category_name: 'Music',
        }
      ],
      content_top_arr : []
    },
    {
      category_name: 'Career',
      category_link: '/career',
      sub_categories: [
        {
          sub_category_name: 'career1',
        },
        {
          sub_category_name: 'career2',
        },
        {
          sub_category_name: 'career3',
        },
        {
          sub_category_name: 'career4',
        }
      ],
      content_top_arr : []
    },
    {
      category_name: 'Portfolio',
      category_link: '/portfolio',
      sub_categories: [
        {
          sub_category_name: 'Eigenhain',
        },
        {
          sub_category_name: 'London',
        },
        {
          sub_category_name: 'MMCA',
        },
        {
          sub_category_name: 'Seed',
        },
        {
          sub_category_name: 'Sony',
        },
        {
          sub_category_name: "The Shin's Work Space",
        }
      ],
      content_top_arr : []
    },
    {
      category_name: 'Contact',
      category_link: '/contact',
      sub_categories: [
        {
          sub_category_name: 'Phone',
        },
        {
          sub_category_name: 'E-mail',
        },
        {
          sub_category_name: 'Instagram',
        },
        {
          sub_category_name: 'Kakao-talk',
        }
      ],
      content_top_arr : []
    }
  ],
  reducers: {
    pushTopArr(state, action) {
      // console.log('state', state[0]);
      // console.log('payload', action.payload);
      // console.log('pushTopArr', state,action);
    }
  }
});

export default configureStore({
  reducer: {
    categorys: categorys.reducer
  }
});


export let { pushTopArr } = categorys.actions;