import express from 'express';
import vaultRoutes from './vault.routes';
import addressRoutes from './address.routes';
// import adminRoutes from './admin.routes';
// import webhookRoutes from "./webhook.routes"

const router = express.Router();

router.use('/vault', vaultRoutes);
router.use('/address',  addressRoutes);
// router.use('/admin', adminRoutes);
// router.use("/webhook", webhookRoutes)

export default router;
