import {readFileSync} from 'fs';
import {Fireblocks, BasePath} from '@fireblocks/ts-sdk';
import {config} from '@/constants/index';
import path from 'path';

const FIREBLOCKS_API_SECRET_PATH = 'fireblocks_secret.key';

const fireblocks = new Fireblocks({
  apiKey: config.FIREBLOCKS_API_KEY,
  basePath: BasePath.Sandbox, // or assign directly to "https://sandbox-api.fireblocks.io/v1";
  secretKey: readFileSync(
    path.join(__dirname, FIREBLOCKS_API_SECRET_PATH),
    'utf8'
  ),
});

export default fireblocks;
