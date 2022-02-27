import {fetchYourIp} from './ipfy.service';
import {IpfyInterface} from '../core/interfaces/IpfyInterface';
import {
  PageParams,
  paginateData,
  PaginateInterface,
} from '../core/utils/paginate';

import Log from '../models/log.model';

export const createLog = async (): Promise<IpfyInterface> => {
  const ipfy: IpfyInterface = await fetchYourIp();

  const attributes = {ip: ipfy.ip, created_at: new Date()};
  await Log.insert(attributes);

  return attributes;
};

export const getLogsWithPage = async (
  pageParams: PageParams
): Promise<PaginateInterface<IpfyInterface>> => {
  const data = await Log.getLogsWithPage(pageParams);
  const totalLogs = await Log.getTotalLogsCount();

  return paginateData<IpfyInterface>(data, totalLogs.count, pageParams);
};
