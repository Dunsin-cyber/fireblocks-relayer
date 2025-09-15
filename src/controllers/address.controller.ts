import {asyncHandler} from '@/middlewares/asyncHandler';
import {ApiResponse} from '@/utils/ApiResponse';
import {NextFunction, Request, Response} from 'express';
import {createBTCAddress} from '@/services/address.service';
import {config} from '@/constants';

export const handleCreateBTCAddress = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {

    const vault = createBTCAddress()

    return res.status(config.STATUS_CODE.OK).json(new ApiResponse('success',  vault));
  }
);
