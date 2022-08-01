export type GenderType = 'female' | 'male';

export interface UserModel {
  id: string;
  username: string;
  fullname: string;
  gender: GenderType;
  email: string;
  registerDate: Date | string;
}

export interface UserRequestInfoModel {
  total?: number;
  pageSize: number;
  page: number;
}

export interface UserRequestResultModel {
  info: UserRequestInfoModel;
  users: UserModel[];
}
