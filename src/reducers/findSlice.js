import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { HTTP_STATUS } from '../constants/constants';

export const fetchHouses = createAsyncThunk('house/fetchHouses',
  async () => {
    const { data } = await axios.get('https://findlidushouse.herokuapp.com/api/v1/houses');
    return data.data;
  });

export const fetchHouse = createAsyncThunk('house/fetchHouse',
  async (id) => {
    const { data } = await axios.get(`https://findlidushouse.herokuapp.com/api/v1/houses/${id}`);
    return data.data;
  });

export const loginstatus = createAsyncThunk('status/loginstatus',
  async () => {
    const { data } = await axios.get('https://findlidushouse.herokuapp.com/logged_in');
    return data;
  });
export const signuser = createAsyncThunk('user/signuser',
  async (user) => {
    const { data } = await axios.post('https://findlidushouse.herokuapp.com/users', { user });
    return data;
  });

export const loginuser = createAsyncThunk('user/loginuser',
  async (user) => {
    const { data } = await axios.post('https://findlidushouse.herokuapp.com/login', { user });
    return data;
  });

export const logoutuser = createAsyncThunk('user/logoutuser',
  async () => {
    const { data } = await axios.post('https://findlidushouse.herokuapp.com/logout');
    return data;
  });

export const addfavorite = createAsyncThunk('favorite/addfavorite',
  async (favorite) => {
    const { data } = await axios.post('https://findlidushouse.herokuapp.com/favorites', { favorite });
    return data;
  });

export const removefavorite = createAsyncThunk('favorite/removefavorite',
  async (id) => {
    const { data } = await axios.delete(`https://findlidushouse.herokuapp.com/favorites/${id}`);
    return data;
  });
export const fetchFavorite = createAsyncThunk('favorite/fetchFavorite',
  async () => {
    const { data } = await axios.get('https://findlidushouse.herokuapp.com/favorites');
    return data.data;
  });

export const findSlice = createSlice({
  name: 'House',
  initialState: {
    house: [],
    singlehouse: [],
    favorite: [],
    status: 'idle',
    userInfo: {},
    loggedin: false,
    create: {},
    addfavorite: {},
    removefavorite: {},
    isAdded: false,
  },
  reducers: {
    CHANGE_LOGGEDIN: (state, action) => ({
      loggedin: action.payload,
    }),
    CHANGE_SINGLE: (state, action) => ({
      single: action.payload,
      catalogues: state.catalogues,

    }),
  },
  /* eslint-disable no-param-reassign */
  extraReducers: {
    [fetchHouses.pending](state) {
      state.status = HTTP_STATUS.PENDING;
    },
    [fetchHouses.fulfilled](state, action) {
      state.status = HTTP_STATUS.FULFILLED;
      state.house = action.payload;
    },
    [fetchHouses.rejected](state) {
      state.status = HTTP_STATUS.REJECTED;
    },
    [fetchHouse.pending](state) {
      state.status = HTTP_STATUS.PENDING;
    },
    [fetchHouse.fulfilled](state, action) {
      state.status = HTTP_STATUS.FULFILLED;
      state.singlehouse = action.payload;
    },
    [fetchHouse.rejected](state) {
      state.status = HTTP_STATUS.REJECTED;
    },
    [fetchFavorite.pending](state) {
      state.status = HTTP_STATUS.PENDING;
    },
    [fetchFavorite.fulfilled](state, action) {
      state.status = HTTP_STATUS.FULFILLED;
      state.favorite = action.payload;
    },
    [fetchFavorite.rejected](state) {
      state.status = HTTP_STATUS.REJECTED;
    },
    [addfavorite.pending](state) {
      state.status = HTTP_STATUS.PENDING;
    },
    [addfavorite.fulfilled](state, action) {
      state.status = HTTP_STATUS.FULFILLED;
      state.addfavorite = action.payload;
      if (state.addfavorite.status === 'SUCCESS') {
        state.isAdded = true;
      }
    },
    [addfavorite.rejected](state) {
      state.status = HTTP_STATUS.REJECTED;
    },
    [removefavorite.pending](state) {
      state.status = HTTP_STATUS.PENDING;
    },
    [removefavorite.fulfilled](state, action) {
      state.status = HTTP_STATUS.FULFILLED;
      state.removefavorite = action.payload;
      if (state.removefavorite.status === 'SUCCESS') {
        state.isAdded = false;
      }
    },
    [removefavorite.rejected](state) {
      state.status = HTTP_STATUS.REJECTED;
    },
    [signuser.pending](state) {
      state.status = HTTP_STATUS.PENDING;
    },
    [signuser.fulfilled](state, action) {
      state.status = HTTP_STATUS.FULFILLED;
      state.create = action.payload;
    },
    [signuser.rejected](state) {
      state.status = HTTP_STATUS.REJECTED;
    },
    [loginuser.pending](state) {
      state.status = HTTP_STATUS.PENDING;
    },
    [loginuser.fulfilled](state, action) {
      state.status = HTTP_STATUS.FULFILLED;
      state.userInfo = action.payload;
      if (state.userInfo.logged_in) {
        state.loggedin = true;
      }
    },
    [loginuser.rejected](state) {
      state.status = HTTP_STATUS.REJECTED;
    },
    [logoutuser.pending](state) {
      state.status = HTTP_STATUS.PENDING;
    },
    [logoutuser.fulfilled](state) {
      state.status = HTTP_STATUS.FULFILLED;
      state.userInfo = {};
      state.loggedin = false;
    },
    [logoutuser.rejected](state) {
      state.status = HTTP_STATUS.REJECTED;
    },
  },
});
/* eslint-enable no-param-reassign */
// Action creators are generated for each case reducer function
export const { CHANGE_LOGGEDIN } = findSlice.actions;
export default findSlice.reducer;
