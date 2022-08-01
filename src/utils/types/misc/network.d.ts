import { AxiosResponse } from 'axios';

export type AxiosNetworkResponse<T> = Promise<AxiosResponse<T>>;
