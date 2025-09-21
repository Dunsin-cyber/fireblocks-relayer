import {asyncHandler} from '@/middlewares/asyncHandler';
import {ApiResponse} from '@/utils/ApiResponse';
import {NextFunction, Request, Response} from 'express';
import {createVault} from '@/services/vault.service';
import {config} from '@/constants';
import {AppError} from '@/utils/AppError';
import utils from '@/utils/index';

//TODO: get userId, email from params
export const handleActvateBaseAssetsForVault = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const {vaultId} = req.params;

    if (!vaultId) {
      throw new AppError(
        'Invalid query parameter',
        config.STATUS_CODE.BAD_REQUEST
      );
    }

    const assets = ['BTC', 'ETH', 'USDC', 'USDT', 'DAI'];

    const activationResults = [];

    return res
      .status(config.STATUS_CODE.OK)
      .json(new ApiResponse('success', 'activationResults'));
  }
);

export const handleActvateAsset = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    return res
      .status(config.STATUS_CODE.OK)
      .json(new ApiResponse('success', 'Asset Activated Successfully'));
  }
);

export const handleUserAssets = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    return res
      .status(config.STATUS_CODE.OK)
      .json(new ApiResponse('success', 'Asset Activated Successfully'));
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
    return res
      .status(config.STATUS_CODE.OK)
      .json(new ApiResponse('success', 'Asset Activated Successfully'));
  }
);

export const handleGetAnAssetBalance = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    return res
      .status(config.STATUS_CODE.OK)
      .json(new ApiResponse('success', 'Asset Activated Successfully'));
  }
);
