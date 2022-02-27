import {Request, Response} from 'express';
import * as statusCodes from '../core/constants/statusCodes';

/**
 * Open Welcome Page
 *
 * @param _req
 * @param res
 */
export const index = async (_req: Request, res: Response) => {
  res.status(statusCodes.OK).json({
    code: statusCodes.OK,
    data: {
      name: 'Welcome to the backend API',
      description:
        'We have three routes available. They are "api/leads/create", "api/leads" & "/"',
    },
  });
};
