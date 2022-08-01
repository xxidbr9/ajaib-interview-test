import { AxiosNetworkResponse } from '@app-types/misc/network';
import { RawUserRequestResult } from '@app-types/models/raw-user.model';
import {
  UserModel,
  UserRequestResultModel,
} from '@app-types/models/user.model';
import UserListDTO from '@utils/dtos/user-dto/user-list.dto';
import request from '@utils/libs/request';

export type GetUserListNetworkParamsType = {
  keyword?: string;
  page?: number;
  results?: number;
  pageSize?: number;
  gender?: UserModel['gender'];
  sortBy?: string;
  sortOrder?: 'descend' | 'ascend';
};

export const getUserListNetwork = async (
  params: GetUserListNetworkParamsType,
): Promise<UserRequestResultModel> => {
  const networkCall = (await request({
    method: 'GET',
    params: {
      ...params,
    },
  })) as unknown as AxiosNetworkResponse<RawUserRequestResult>;

  const user = new UserListDTO((await networkCall).data);
  return user.result;
};
