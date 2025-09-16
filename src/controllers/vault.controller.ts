import {asyncHandler} from '@/middlewares/asyncHandler';
import {ApiResponse} from '@/utils/ApiResponse';
import {NextFunction, Request, Response} from 'express';
import {createVault} from '@/services/vault.service';
import {config} from '@/constants';
import {AppError} from '@/utils/AppError';
import utils from '@/utils/index';

export const handleCreateVault = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const {userId, email} = req.params;

    if (!utils.validEmail(email) || !utils.validUserId(userId)) {
      throw new AppError(
        'Invalid query parameter',
        config.STATUS_CODE.BAD_REQUEST
      );
    }

    const vault = await createVault(userId, email);

    if (vault) {
      throw new AppError(
        'Vault creation failed',
        config.STATUS_CODE.INTERNAL_SERVER_ERROR
      );
    }

    return res
      .status(config.STATUS_CODE.OK)
      .json(new ApiResponse('success', vault));
  }
);
