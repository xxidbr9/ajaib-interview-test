import { RootState } from '@rdx/index';
import { createSelector } from '@reduxjs/toolkit';

export const rdxUserState = (state: RootState) => state.userReducer;
export const isUserListLoading = (state: RootState) => state.userReducer.loading;

export const getUserPaginationInfo = (state: RootState) => state.userReducer.userList?.info;
export const getUserFilter = (state: RootState) => state.userReducer.filter;
export const getUserSorter = (state: RootState) => state.userReducer.sorter;
/* eslint-disable-next-line max-len  */
export const getUsersList = createSelector([rdxUserState], (state) => state.userList?.users.map((user, index) => ({ key: index, ...user })));
