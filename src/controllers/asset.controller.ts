import {asyncHandler} from '@/middlewares/asyncHandler';
import {ApiResponse} from '@/utils/ApiResponse';
import {NextFunction, Request, Response} from 'express';
import {createVault} from '@/services/vault.service';
import {config} from '@/constants';
import {AppError} from '@/utils/AppError';
import utils from '@/utils/index';
import {getUserById} from '@/services/user.service';
import {
  getAssetBalances,
  getUserAssetsAddr,
  initAsset,
} from '@/services/asset.service';

export const handleActvateBaseAssetsForVault = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const {userId} = req.params;

    if (!utils.validUserId(userId)) {
      throw new AppError(
        'Invalid query parameter',
        config.STATUS_CODE.BAD_REQUEST
      );
    }

    const user = await getUserById(userId);
    if (user?.fireblocksVaultId && user?.wallet?.id) {
      let data = await initAsset(user.fireblocksVaultId, user.wallet.id);

      return res
        .status(config.STATUS_CODE.CREATED)
        .json(new ApiResponse('success', data));
    } else {
      throw new AppError(
        'User or user wallet does not exist',
        config.STATUS_CODE.NOT_FOUND
      );
    }
  }
);

export const handleActvateAsset = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    return res
      .status(config.STATUS_CODE.OK)
      .json(new ApiResponse('success', 'Asset Activated Successfully'));
  }
);

export const handleGetAssetAddresses = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const {userId} = req.params;

    if (!utils.validUserId(userId)) {
      throw new AppError(
        'Invalid userId format',
        config.STATUS_CODE.BAD_REQUEST
      );
    }

    const user = await getUserById(userId);
    if (user?.wallet) {
      const assets = await getUserAssetsAddr(user.wallet.id);
      return res
        .status(config.STATUS_CODE.OK)
        .json(new ApiResponse('success', assets));
    } else {
      throw new AppError(
        'User or user Wallet does not exist',
        config.STATUS_CODE.NOT_FOUND
      );
    }
  }
);

export const handleGetAnAsset = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    return res
      .status(config.STATUS_CODE.OK)
      .json(new ApiResponse('success', 'Asset Activated Successfully'));
  }
);

//-----ADDRESS RELATED CONTROLLERS-----

export const handleGetAllAssetAddresses = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    return res
      .status(config.STATUS_CODE.OK)
      .json(new ApiResponse('success', 'Asset Activated Successfully'));
  }
);

//-----BALANCE RELATED CONTROLLERS-----

export const handleAssetBalances = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const {userId} = req.params;

    if (!utils.validUserId(userId)) {
      throw new AppError(
        'Invalid userId format',
        config.STATUS_CODE.BAD_REQUEST
      );
    }

    const user = await getUserById(userId);
    if (user?.wallet) {
      const balance = await getAssetBalances(user.wallet.id);
      return res
        .status(config.STATUS_CODE.OK)
        .json(new ApiResponse('success', balance));
    } else {
      throw new AppError(
        'User or user Wallet does not exist',
        config.STATUS_CODE.NOT_FOUND
      );
    }
  }
);

export const handleGetAnAssetBalance = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    return res
      .status(config.STATUS_CODE.OK)
      .json(new ApiResponse('success', 'Asset Activated Successfully'));
  }
);
