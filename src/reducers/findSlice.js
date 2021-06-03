import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { HTTP_STATUS } from '../constants/constants';

export const fetchHouses = createAsyncThunk('house/fetchHouses',
  async () => {
    const { data } = await axios.get('/api/v1/houses');
    console.log(data.data, 'hii');
    return data.data;
  });

export const fetchHouse = createAsyncThunk('house/fetchHouse',
  async (id) => {
    const { data } = await axios.get(`/api/v1/houses/${id}`);
    console.log(data.data, 'hii');
    return data.data;
  });

export const loginstatus = createAsyncThunk('status/loginstatus',
  async () => {
    const { data } = await axios.get('/logged_in',
      {
        withCredentials: true,
        credentials: 'include',
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Credentials': true,
        },
      });
    console.log(data);
    return data;
  });

export const loginuser = createAsyncThunk('user/loginuser',
  async (user) => {
    const { data } = await axios.post('/login', { user }, { withCredentials: true });
    console.log(data);
    return data.data;
  });

export const logoutuser = createAsyncThunk('user/logoutuser',
  async () => {
    const { data } = await axios.post('/logout', { withCredentials: true });
    console.log(data);
    return data.data;
  });

export const addfavorite = createAsyncThunk('favorite/addfavorite',
  async (favorite) => {
    const { data } = await axios.post('/favorites', { favorite }, { withCredentials: true });
    console.log(data);
    return data.data;
  });
export const fetchFavorite = createAsyncThunk('favorite/fetchFavorite',
  async () => {
    const { data } = await axios.get('/favorites');
    console.log(data.data, 'hii');
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
    user: {},
  },
  reducers: {
    SETUSER: (state, action) => ({
      filter: action.payload,
      catalogues: state.catalogues,
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
    [loginstatus.pending](state) {
      state.status = HTTP_STATUS.PENDING;
    },
    [loginstatus.fulfilled](state, action) {
      state.status = HTTP_STATUS.FULFILLED;
      state.userInfo = action.payload;
    },
    [loginstatus.rejected](state) {
      state.status = HTTP_STATUS.REJECTED;
    },
    [logoutuser.pending](state) {
      state.status = HTTP_STATUS.PENDING;
    },
    [logoutuser.fulfilled](state) {
      state.status = HTTP_STATUS.FULFILLED;
      state.userInfo = {};
    },
    [logoutuser.rejected](state) {
      state.status = HTTP_STATUS.REJECTED;
    },
  },
});
/* eslint-enable no-param-reassign */
// Action creators are generated for each case reducer function
export const { SETUSER } = findSlice.actions;

// export const selectAllHouses = (state) => state.house;
export default findSlice.reducer;
