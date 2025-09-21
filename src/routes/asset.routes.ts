import express from 'express';
import {
  handleActvateBaseAssetsForVault,
  handleActvateAsset,
  handleUserAssets,
  handleGetAnAsset,
  handleGetAllAssetAddresses,
  handleAssetBalances,
  handleGetAnAssetBalance,
} from '@/controllers/asset.controller';

const router = express.Router();

// -----ASSET RELATED ROUTES-----
router.post('/activate-base-assets', handleActvateBaseAssetsForVault);
router.post('/activate-asset/:assetId', handleActvateAsset);
router.get('/get-assets/:userId', handleUserAssets);
router.get('/get-asset/:userId/:assetId', handleGetAnAsset);
//TODO:
// - deactivate asset

//-----ADDRESS RELATED ROUTES-----
router.get('/addresses/:userId', handleGetAllAssetAddresses);
router.get('/address/:userId/:assetId', handleGetAnAsset);

//-----BALANCE RELATED ROUTES-----
router.get('/balances/:userId', handleAssetBalances);
router.get('/balance/:userId/:assetId', handleGetAnAssetBalance);

//TODO: move to separate file
//-----TRANSACTION RELATED ROUTES-----
// - get all transactions for a user
// - get specific transaction for a user
// - create transaction for a user

export default router;
