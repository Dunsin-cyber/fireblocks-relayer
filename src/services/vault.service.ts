import fireblocks from '@/fireblocks';
import {
  VaultsApiActivateAssetForVaultAccountRequest,
  VaultsApiCreateVaultAccountRequest,
  VaultsApiGetVaultAccountRequest,
  VaultsApiUnhideVaultAccountRequest,
} from '@fireblocks/ts-sdk';

export const createVault = async (userId: string, email: string) => {
  const requestParameters: VaultsApiCreateVaultAccountRequest = {
    createVaultAccountRequest: {
      name: `${userId}-${email}`,
      hiddenOnUI: false, // just for demo purpose, should be hidden in production
      autoFuel: false,
    },
  };

  const vault = await fireblocks.vaults.createVaultAccount(requestParameters);
  return vault;
};

export const findUserVault = async (userId: string, email: string) => {
  const requestParamters: VaultsApiGetVaultAccountRequest = {
    vaultAccountId: `${userId}-${email}`,
  };
  const vault = await fireblocks.vaults.getVaultAccount(requestParamters);

  return vault;
};

export const activateAssetForAVault = async (
  vaultId: string,
  assetId: string
) => {
  const requestParamters: VaultsApiActivateAssetForVaultAccountRequest = {
    vaultAccountId: vaultId,
    assetId: assetId,
  };
  const response = await fireblocks.vaults.activateAssetForVaultAccount(
    requestParamters
  );

  return response;
};

export const showVaultInConsole = async (vaultId: string) => {
  const requestParamters: VaultsApiUnhideVaultAccountRequest = {
    vaultAccountId: vaultId,
  };
  const vault = await fireblocks.vaults.unhideVaultAccount(requestParamters);

  return vault;
};
