import {Request, Response} from 'express';

import * as logService from '../services/log.service';
import * as statusCodes from '../core/constants/statusCodes';
import {getPageParams} from '../core/utils/paginate';

/**
 * Create log
 *
 * @param _req object
 * @param res object
 * @param next function
 */
export const createLog = async (_req: Request, res: Response) => {
  const data = await logService.createLog();

  res.status(statusCodes.OK).json({
    code: statusCodes.OK,
    data,
  });
};

/**
 * Get the list of logs
 *
 * @param _req object
 * @param res object
 * @param next function
 */
export const getLogs = async (req: Request, res: Response) => {
  const pageParams = getPageParams(req.query);

  const data = await logService.getLogsWithPage(pageParams);

  res.status(statusCodes.OK).json({
    code: statusCodes.OK,
    data,
  });
};
