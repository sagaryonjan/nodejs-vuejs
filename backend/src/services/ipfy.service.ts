import axios, {AxiosResponse} from 'axios';
import {IpfyInterface} from '../core/interfaces/IpfyInterface';

export const fetchYourIp = async (): Promise<IpfyInterface> => {
  const result: AxiosResponse = await axios.get(
    'https://api.ipify.org/?format=json'
  );

  return result.data as IpfyInterface;
};
