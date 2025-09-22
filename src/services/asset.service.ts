import fireblocks from '@/fireblocks';
import {VaultsApiActivateAssetForVaultAccountRequest} from '@fireblocks/ts-sdk';
import {PrismaClient} from '@prisma/client';
import {config} from '@/constants';

const prisma = new PrismaClient();

export const activateAssetForAVault = async (
  vaultId: string,
  assetId: string
) => {
  const requestParamters: VaultsApiActivateAssetForVaultAccountRequest = {
    vaultAccountId: vaultId,
    assetId: assetId,
  };
  try {
    const response = await fireblocks.vaults.activateAssetForVaultAccount(
      requestParamters
    );

    return response;
  } catch (err) {
    throw err;
  }
};

type CreateAssetT = {
  name: string;
  symbol: string;
  address: string;
  walletId: string;
};

export const createAssetinDB = async (data: CreateAssetT) => {
  try {
    const asset = await prisma.asset.create({
      data,
    });

    return asset;
  } catch (err) {
    throw Error('Error creating an Asset');
  }
};

export const initAsset = async (vaultId: string, walletId: string) => {
  try {
    return await prisma.$transaction(async (tx) => {
      const assets =
        config.NODE_ENV !== 'production'
          ? config.BASE_ASSETS_TESTNET
          : config.BASE_ASSETS_MAINNET;

      // Step 1: Try activating all assets on Fireblocks in parallel
      const fireblocksResults = await Promise.all(
        assets.map(async (asset) => {
          try {
            const activate = await activateAssetForAVault(vaultId, asset.id);

            if (activate.data.address) {
              return {
                name: asset.name,
                symbol: asset.id,
                address: activate.data.address,
                walletId,
              };
            }

            return null; // discard failed activations
          } catch (err) {
            // log error but don’t break the whole loop
            // TODO - add Job to recreate the failed asset.id and also create it in database
            console.error(`Failed to activate ${asset.id}:`, err);
            return null;
          }
        })
      );

      // Step 2: Keep only successful activations
      const validAssets = fireblocksResults.filter(
        (asset): asset is NonNullable<typeof asset> => asset !== null
      );

      // Step 3: Bulk insert into DB
      if (validAssets.length > 0) {
        await tx.asset.createMany({
          data: validAssets,
          skipDuplicates: true,
        });
      }

      return validAssets;
    });
  } catch (err) {
    console.log('schedule cleanup');
    throw err;
  }
};

export const getUserAssetsAddr = async (walletId: string) => {
  return await prisma.asset.findMany({
    where: {
      walletId,
    },
    select: {
      name: true,
      symbol: true,
      address: true,
      createdAt: true,
    },
  });
};

export const getAssetBalances = async (walletId: string) => {
  return await prisma.asset.findMany({
    where: {
      walletId,
    },
    select: {
      symbol: true,
      balance: true,
      updatedAt: true,
    },
  });
};
