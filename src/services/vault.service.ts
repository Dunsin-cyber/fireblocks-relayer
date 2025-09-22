import fireblocks from '@/fireblocks';
import {
  VaultsApiActivateAssetForVaultAccountRequest,
  VaultsApiCreateVaultAccountRequest,
  VaultsApiGetVaultAccountRequest,
  VaultsApiUnhideVaultAccountRequest,
} from '@fireblocks/ts-sdk';

export const createVault = async (userId: string) => {
  const requestParameters: VaultsApiCreateVaultAccountRequest = {
    createVaultAccountRequest: {
      name: `${userId}`,
      hiddenOnUI: false, // just for demo purpose, should be hidden in production
      autoFuel: false,
    },
  };

  const vault = await fireblocks.vaults.createVaultAccount(requestParameters);
  return vault;
};

export const findUserVault = async (vaultId: string) => {
  const requestParamters: VaultsApiGetVaultAccountRequest = {
    vaultAccountId: `${vaultId}`,
  };
  const vault = await fireblocks.vaults.getVaultAccount(requestParamters);

  return vault;
};

export const showVaultInConsole = async (vaultId: string) => {
  const requestParamters: VaultsApiUnhideVaultAccountRequest = {
    vaultAccountId: vaultId,
  };
  const vault = await fireblocks.vaults.unhideVaultAccount(requestParamters);

  return vault;
};
