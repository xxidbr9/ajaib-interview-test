import userAPI, { GetUserListNetworkParamsType } from '@api/user';
import {
  GenderType,
  UserModel,
  UserRequestInfoModel,
  UserRequestResultModel,
} from '@app-types/models/user.model';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

type rdxUserInitialStateType = {
  userList: {
    users: UserModel[];
    info: UserRequestInfoModel;
  };
  filter: {
    gender?: GenderType;
    keyword?: string;
    q?: string;
  };
  sorter: {
    sortBy?: string;
    sortOrder?: 'descend' | 'ascend';
  };
  loading: boolean;
  error?: Error | string;
};

const initialState: rdxUserInitialStateType = {
  userList: {
    users: [],
    info: {
      page: 1,
      total: 200,
      pageSize: 10,
    },
  },
  filter: {},
  sorter: {},
  loading: true,
};

const fetchUsersList = createAsyncThunk(
  '/users_list',
  async (payload: GetUserListNetworkParamsType) => {
    const response = await userAPI.getUserListNetwork(payload);
    return {
      userList: response,
    };
  },
);

const userSlice = createSlice({
  initialState,
  name: 'user',
  reducers: {
    setUserList(state, action: PayloadAction<UserRequestResultModel>) {
      state.userList = action.payload;
    },
    setSearchKeyword(state, action: PayloadAction<string>) {
      state.filter.keyword = action.payload;
      state.userList.info.page = 1;
    },
    setSearchDebounce(state, action: PayloadAction<string>) {
      state.filter.q = action.payload;
      state.loading = true;
    },
    setGender(state, action: PayloadAction<string>) {
      state.filter.gender = action.payload as GenderType;
      state.userList.info.page = 1;
    },
    resetFilter(state) {
      state.filter = initialState.filter;
      state.userList.info.page = 1;
    },
    setSorter(state, action: PayloadAction<rdxUserInitialStateType['sorter']>) {
      state.sorter = action.payload;
      state.userList.info.page = 1;
    },
    setPagination(state, action: PayloadAction<UserRequestInfoModel>) {
      state.userList = {
        ...state.userList,
        info: action.payload,
      };
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchUsersList.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUsersList.fulfilled, (state, action) => {
        state.userList = action.payload.userList;
        state.loading = false;
      })
      .addCase(fetchUsersList.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const rdxUserActions = userSlice.actions;
export const rdxUserReducer = userSlice.reducer;

export const rdxUserThunkActions = {
  fetchUsersList,
};
