import express from 'express';
import { handleCreateVault } from '@/controllers/vault.controller';

const router = express.Router();

/**
 * @swagger
 * /api/vault/create:
 *   post:
 *     summary: Create a Vault
 *     tags: [Vault]
 *     requestBody:
 *       required: true
 *     responses:
 *       201:
 *         description: vault created successfully
 *       400:
 *         description: Invalid request payload or parameters
 *       401:
 *         description: Unauthorized — invalid transaction PIN
 *       500:
 *         description: Internal server error
 */
router.post('/create', handleCreateVault);

export default router;
