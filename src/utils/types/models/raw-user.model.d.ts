export interface Name {
  title: string;
  first: string;
  last: string;
}

export interface Street {
  number: number;
  name: string;
}

export interface Coordinates {
  latitude: string;
  longitude: string;
}

export interface Timezone {
  offset: string;
  description: string;
}

export interface Location {
  street: Street;
  city: string;
  state: string;
  country: string;
  postcode: string;
  coordinates: Coordinates;
  timezone: Timezone;
}

export interface Login {
  uuid: string;
  username: string;
  password: string;
  salt: string;
  md5: string;
  sha1: string;
  sha256: string;
}

export interface DateValue {
  date: Date | string;
  age: number;
}

export interface Id {
  name: string;
  value?: string | null;
}

export interface Picture {
  large: string;
  medium: string;
  thumbnail: string;
}

export interface UserResult {
  gender: string;
  name: Name;
  location: Location;
  email: string;
  login: Login;
  dob: DateValue;
  registered: DateValue;
  phone: string;
  cell: string;
  id: Id;
  picture: Picture;
  nat: string;
}

export interface RawUserRequestInfo {
  seed: string;
  results: number;
  page: number;
  version: string;
}

export interface RawUserRequestResult {
  results: UserResult[];
  info: RawUserRequestInfo;
}
