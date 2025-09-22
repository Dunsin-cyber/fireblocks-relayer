import {PrismaClient, User} from '@prisma/client';
import {createVault} from './vault.service';

const prisma = new PrismaClient();

export const getUserById = async (userId: string) => {
  const user = prisma.user.findUnique({
    where: {upstreamUserId: userId},
    include: {wallet: true},
  });
  return user;
};

export const createUser = async (
  userId: string,
  email: string
): Promise<User> => {
  const user = await prisma.user.create({
    data: {
      upstreamUserId: userId,
      email,
      wallet: {create: {}},
    },
  });

  return user;
};

export const updateUserVaultId = async (
  id: string,
  vaultId: string
): Promise<User> => {
  const user = await prisma.user.update({
    where: {id},
    data: {fireblocksVaultId: vaultId},
  });

  return user;
};
export const initUser = async (userId: string, email: string) => {
  let externalVaultId: string | undefined = undefined;

  try {
    return await prisma.$transaction(async (tx) => {
      // Step 1: create local user
      const user = await tx.user.create({
        data: {
          upstreamUserId: userId,
          email,
          wallet: {create: {}},
        },
      });

      // Step 2: create external vault
      let vault;
      try {
        vault = await createVault(user.id);
        externalVaultId = vault.data.id; // keep this outside tx scope
      } catch (error) {
        throw new Error('Vault creation failed');
      }

      // Step 3: update user with external vault id
      return await tx.user.update({
        where: {id: user.id},
        data: {fireblocksVaultId: externalVaultId},
      });
    });
  } catch (error) {
    if (externalVaultId) {
      // TODO - schedule cleanup
    }
    throw error;
  }
};

// If DB rolled back after external succeeded → schedule cleanup
//   await prisma.cleanupJob.create({
//     data: {
//       type: "DELETE_VAULT",
//       payload: JSON.stringify({ vaultId: externalVaultId }),
//       status: "PENDING",
//     },
//   });

/* 
model CleanupJob {
  id        String   @id @default(uuid())
  type      String
  payload   String   // JSON with vaultId, userId, etc.
  status    String   @default("PENDING") // PENDING | DONE | FAILED
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
*/

export const getUserWallet = async (userId: string) => {
  const wallet = await prisma.wallet.findUnique({
    where: {
      userId,
    },
  });

  return wallet;
};
