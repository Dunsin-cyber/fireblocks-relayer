import express from 'express';
import vaultRoutes from './vault.routes';
import assetRoutes from './asset.routes';
// import adminRoutes from './admin.routes';
// import webhookRoutes from "./webhook.routes"

const router = express.Router();

router.use('/vault', vaultRoutes);
router.use('/asset', assetRoutes);
// router.use('/admin', adminRoutes);
// router.use("/webhook", webhookRoutes)

export default router;
