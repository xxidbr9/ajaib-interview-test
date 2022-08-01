import React, { useEffect } from 'react';
import { UserModel } from '@app-types/models/user.model';
import {
  rdxUserActions,
  rdxUserSelector,
  rdxUserThunkActions,
} from '@rdx/features/user-store';
import { useAppDispatch, useAppSelector } from '@utils/hooks';
import { Table as AntdTable } from 'antd';
import { SorterResult } from 'antd/lib/table/interface';
import type { ColumnsType, TableProps } from 'antd/es/table';
import { GetUserListNetworkParamsType } from '@api/user';

const columns: ColumnsType<UserModel> = [
  {
    title: 'Username',
    dataIndex: 'username',
    sorter: (a, b) => (a.username < b.username ? -1 : 1),
    width: '20%',
  },
  {
    title: 'Name',
    dataIndex: 'fullname',
    sorter: (a, b) => (a.fullname < b.fullname ? -1 : 1),
    width: '20%',
  },
  {
    title: 'Email',
    dataIndex: 'email',
    sorter: (a, b) => (a.email < b.email ? -1 : 1),
    width: '20%',
  },
  {
    title: 'Gender',
    dataIndex: 'gender',
    sorter: (a, b) => (a.gender < b.gender ? -1 : 1),
    width: '15%',
  },
  {
    title: 'Register Date',
    dataIndex: 'registerDate',
    sorter: (a, b) => (a.registerDate < b.registerDate ? -1 : 1),
    width: '25%',
  },
];

const Table: React.FC = () => {
  const rdxUserData = useAppSelector(rdxUserSelector.getUsersList);
  const rdxLoading = useAppSelector(rdxUserSelector.isUserListLoading);
  const rdxPagination = useAppSelector(rdxUserSelector.getUserPaginationInfo);
  const rdxSort = useAppSelector(rdxUserSelector.getUserSorter);
  const rdxUserFilter = useAppSelector(rdxUserSelector.getUserFilter);

  const dispatch = useAppDispatch();

  const handleChange: TableProps<UserModel>['onChange'] = async (
    pagination,
    _filters,
    sorter,
    extra,
  ) => {
    const sort = { ...sorter } as SorterResult<UserModel>;

    const isSorting = !!sort.column?.dataIndex;
    dispatch(
      rdxUserActions.setSorter({
        ...(isSorting && { sortBy: sort.field as string }),
        ...(!!sort.order && { sortOrder: sort.order }),
      }),
    );

    const page = extra.action === 'sort' ? 1 : (pagination.current as number);

    dispatch(
      rdxUserActions.setPagination({
        page,
        pageSize: pagination.pageSize as number,
        total: pagination.total,
      }),
    );
  };

  // TODO : add url reader
  useEffect(() => {
    const isHaveSortBy = !!rdxSort.sortBy;
    const isHaveSortOrder = !!rdxSort.sortOrder;
    const isSelectedGender = ['female', 'male'].includes(
      rdxUserFilter.gender as string,
    );

    const params: GetUserListNetworkParamsType = {
      page: rdxPagination?.page,
      results: rdxPagination?.pageSize,
      pageSize: rdxPagination?.pageSize, // for presentation purpose
      ...(isHaveSortBy && { sortBy: rdxSort?.sortBy }),
      ...(isHaveSortOrder && { sortOrder: rdxSort?.sortOrder }),
      ...(isSelectedGender && { gender: rdxUserFilter.gender }),
      ...(!!rdxUserFilter.keyword && { keyword: rdxUserFilter.keyword }),
    };

    dispatch(rdxUserThunkActions.fetchUsersList(params));
  }, [
    rdxPagination?.page,
    rdxPagination?.pageSize,
    rdxSort?.sortBy,
    rdxSort?.sortOrder,
    rdxUserFilter.gender,
    rdxUserFilter.keyword,
    dispatch,
  ]);

  return (
    <AntdTable
      columns={columns}
      dataSource={rdxUserData}
      onChange={handleChange}
      loading={rdxLoading}
      pagination={{
        current: rdxPagination?.page,
        total: rdxPagination?.total,
        pageSize: rdxPagination?.pageSize,
      }}
    />
  );
};
export default Table;
