import { RawUserRequestResult } from '@app-types/models/raw-user.model';
import {
  UserModel,
  UserRequestInfoModel,
  UserRequestResultModel,
} from '@app-types/models/user.model';
import UserDTO from './user.dto';

class UserListDTO {
  result: UserRequestResultModel;

  constructor(rawUserRequestResult: RawUserRequestResult) {
    const info: UserRequestInfoModel = {
      total: 200, // mock total
      pageSize: rawUserRequestResult.info.results,
      page: rawUserRequestResult.info.page,
    };

    const users: UserModel[] = rawUserRequestResult.results.map((user) => {
      const newUser = new UserDTO(user);
      return newUser.user;
    });

    this.result = {
      info,
      users,
    };
  }
}

export default UserListDTO;
