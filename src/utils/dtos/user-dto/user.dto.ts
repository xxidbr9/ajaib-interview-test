import { UserResult } from '@app-types/models/raw-user.model';
import { GenderType, UserModel } from '@app-types/models/user.model';

class UserDTO {
  user: UserModel;

  constructor(rawUser: UserResult) {
    this.user = {
      id: rawUser.id.value as string,
      email: rawUser.email,
      fullname: [rawUser.name.first, rawUser.name.last].join(' '),
      gender: rawUser.gender as GenderType,
      registerDate: rawUser.registered.date,
      username: rawUser.login.username,
    };
  }
}

export default UserDTO;
