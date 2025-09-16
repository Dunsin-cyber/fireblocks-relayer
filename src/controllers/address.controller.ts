import {asyncHandler} from '@/middlewares/asyncHandler';
import {ApiResponse} from '@/utils/ApiResponse';
import {NextFunction, Request, Response} from 'express';
import {createBTCAddress} from '@/services/address.service';
import {config} from '@/constants';
import {AppError} from '@/utils/AppError';
import utils from '@/utils/index';
import {
  activateAssetForAVault,
  createVault,
  findUserVault,
} from '@/services/vault.service';

export const handleCreateBTCAddress = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const {userId, email} = req.params;

    if (!utils.validEmail(email) || !utils.validUserId(userId)) {
      throw new AppError(
        'Invalid query parameter',
        config.STATUS_CODE.BAD_REQUEST
      );
    }

    const userHasVault = await findUserVault(userId, email);

    if (!userHasVault) {
      const vault = await createVault(userId, email);
      if (!vault) {
        throw new AppError(
          'Vault creation failed',
          config.STATUS_CODE.INTERNAL_SERVER_ERROR
        );
      }

      const activateBTCAsset = await activateAssetForAVault(
        `${userId}-${email}`,
        'BTC'
      );
      if (!activateBTCAsset) {
        throw new AppError(
          'Activating BTC asset for vault failed',
          config.STATUS_CODE.INTERNAL_SERVER_ERROR
        );
      }
    }

    const vault = createBTCAddress();

    return res
      .status(config.STATUS_CODE.OK)
      .json(new ApiResponse('success', vault));
  }
);
