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

export const config = {
  NODE_ENV,
  PORT,
  STATUS_CODE,
  FIREBLOCKS_API_KEY,
};
