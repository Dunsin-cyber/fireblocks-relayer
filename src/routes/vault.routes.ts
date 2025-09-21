import express from 'express';
import {handleCreateVault} from '@/controllers/vault.controller';

const router = express.Router();

router.post('/create/:userId/:email', handleCreateVault);

export default router;
