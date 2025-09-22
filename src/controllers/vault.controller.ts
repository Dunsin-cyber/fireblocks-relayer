import {asyncHandler} from '@/middlewares/asyncHandler';
import {ApiResponse} from '@/utils/ApiResponse';
import {NextFunction, Request, Response} from 'express';
import {config} from '@/constants';
import {AppError} from '@/utils/AppError';
import utils from '@/utils/index';
import {
  createUser,
  getUserById,
  initUser,
  updateUserVaultId,
} from '@/services/user.service';
import {User} from '@prisma/client';

export const handleCreateVault = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const {userId, email} = req.params;

    if (!utils.validEmail(email) || !utils.validUserId(userId)) {
      throw new AppError(
        'Invalid query parameter',
        config.STATUS_CODE.BAD_REQUEST
      );
    }

    let userExists;
    let user: User | null;
    userExists = await getUserById(userId);

    if (!userExists) {
      try {
        user = await initUser(userId, email);
        const {updatedAt, ...returnData} = user;
        return res
          .status(config.STATUS_CODE.OK)
          .json(new ApiResponse('success', returnData));
      } catch (err) {
        throw new AppError(
          'User initialization failed, please try again later.',
          config.STATUS_CODE.INTERNAL_SERVER_ERROR
        );
      }
    } else if (userExists && userExists.fireblocksVaultId) {
      throw new AppError(
        'User already initialized',
        config.STATUS_CODE.BAD_REQUEST
      );
    }
  }
);
