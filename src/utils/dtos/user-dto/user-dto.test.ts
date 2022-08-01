import { RawUserRequestResult } from '@app-types/models/raw-user.model';
import UserListDTO from './user-list.dto';

const mockUserRawList: RawUserRequestResult = {
  results: [
    {
      gender: 'male',
      name: {
        title: 'Mr',
        first: 'Connor',
        last: 'Morris',
      },
      location: {
        street: {
          number: 4503,
          name: 'Memorial Avenue',
        },
        city: 'New Plymouth',
        state: 'Wellington',
        country: 'New Zealand',
        postcode: '81673',
        coordinates: {
          latitude: '54.7921',
          longitude: '-72.2906',
        },
        timezone: {
          offset: '+9:00',
          description: 'Tokyo, Seoul, Osaka, Sapporo, Yakutsk',
        },
      },
      email: 'connor.morris@example.com',
      login: {
        uuid: '38e789ec-d2b2-43e9-8398-0fb057983d0c',
        username: 'organicleopard156',
        password: 'clarissa',
        salt: '1jTkm6Ka',
        md5: 'f216e70cad2ead400e2717ae48e63a93',
        sha1: '74dbf8826d279569a320c9e911053cab8ea80de0',
        sha256: 'd2a1ddb497e12d33491cb378e1d4a9ed14bb8d06c81b33d744253dcf89388afd',
      },
      dob: {
        date: '2000-04-06T19:10:45.214Z',
        age: 22,
      },
      registered: {
        date: '2016-08-18T05:38:35.103Z',
        age: 5,
      },
      phone: '(345)-518-0866',
      cell: '(452)-611-1680',
      id: {
        name: '',
        value: null,
      },
      picture: {
        large: 'https://randomuser.me/api/portraits/men/0.jpg',
        medium: 'https://randomuser.me/api/portraits/med/men/0.jpg',
        thumbnail: 'https://randomuser.me/api/portraits/thumb/men/0.jpg',
      },
      nat: 'NZ',
    },
  ],
  info: {
    seed: '1af290efafc6ac0d',
    results: 1,
    page: 1,
    version: '1.4',
  },
};

describe('Test User DTO', () => {
  it('testing UserListDTO', () => {
    const userListDTO = new UserListDTO(mockUserRawList);
    expect(userListDTO).toBeInstanceOf(UserListDTO);
  });
});
