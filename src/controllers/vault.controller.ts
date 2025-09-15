import {asyncHandler} from '@/middlewares/asyncHandler';
import {ApiResponse} from '@/utils/ApiResponse';
import {NextFunction, Request, Response} from 'express';
import {createVault} from '@/services/vault.service';
import {config} from '@/constants';

export const handleCreateVault = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {

    const vault = createVault()

    return res.status(config.STATUS_CODE.OK).json(new ApiResponse('success',  vault));
  }
);
