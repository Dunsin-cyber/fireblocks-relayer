import dotenv from 'dotenv';
// import { CipherKey } from 'crypto';
dotenv.config();

//  MAKES SURE THAT ALL VARIABLES ARE IN ENV BEFPRE APP STARTS
const requiredEnvVars = ['NODE_ENV', 'FIREBLOCKS_API_KEY'];

const missingEnvVars = requiredEnvVars.filter((envVar) => !process.env[envVar]);

if (missingEnvVars.length > 0) {
  console.error(
    `❌ Missing required environment variables: ${missingEnvVars.join(', ')}`
  );
  process.exit(1);
}

// ? SYSTEM CREDENTIALS
const NODE_ENV = process.env.NODE_ENV;
const PORT = process.env.PORT || 3000;
const STATUS_CODE = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  CONFLICT: 409,
  INTERNAL_SERVER_ERROR: 500,
};

//? FIREBLOCKS CREDENTIALS
const FIREBLOCKS_API_KEY = process.env.FIREBLOCKS_API_KEY as string;
//! NOTE: asset (USDT) is not supported by fireblocks

const BASE_ASSETS_TESTNET = [
  {
    name: 'Bitcoin Test',
    id: 'BTC_TEST',
  },
  {
    name: 'Ethereum Testnet (Sepolia)',
    id: 'ETH_TEST5',
  },
  {
    name: 'Solana Test',
    id: 'SOL_TEST',
  },
  {
    name: 'Binance Coin Test',
    id: 'BNB_TEST',
  },
];
const BASE_ASSETS_MAINNET = [
  {
    name: 'Bitcoin',
    id: 'BTC',
  },
  {
    name: 'Ethereum',
    id: 'ETH',
  },
];

export const config = {
  NODE_ENV,
  PORT,
  STATUS_CODE,
  FIREBLOCKS_API_KEY,
  BASE_ASSETS_TESTNET,
  BASE_ASSETS_MAINNET,
};
