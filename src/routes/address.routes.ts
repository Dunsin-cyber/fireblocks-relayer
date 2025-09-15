import express from 'express';
import { handleCreateBTCAddress } from '@/controllers/address.controller';

const router = express.Router();

/**
 * @swagger
 * /api/address/create:
 *   post:
 *     summary: Create or get a bitcoin address
 *     tags: [Address]
 *     responses:
 *       201:
 *         description: Address created successfully
 */
router.post('/create', handleCreateBTCAddress);

export default router;
