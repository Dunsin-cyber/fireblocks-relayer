import express from 'express';
import {handleCreateBTCAddress} from '@/controllers/address.controller';

const router = express.Router();

/**
 * @swagger
 * /api/address/create:
 *   post:
 *     summary: Create or get a bitcoin address
 *     tags: [Address]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - userId
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 example: user@example.com
 *               userId:
 *                 type: string
 *                 format: uuid
 *                 example: "550e8400-e29b-41d4-a716-446655440000"
 *     responses:
 *       201:
 *         description: Address created successfully
 */
router.post('/create', handleCreateBTCAddress);

export default router;
