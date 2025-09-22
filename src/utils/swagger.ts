import swaggerJSDoc from 'swagger-jsdoc';
import path from 'path';
import {config} from '@/constants/index';
import YAML from 'yamljs';

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'Moniehub X Fireblocks Relayer',
    version: '1.0.0',
    description: 'API documentation',
  },
  components: {
    securitySchemes: {},
  },
  servers: [
    {
      url: 'https://fireblocks-relayer.onrender.com',
      description: 'Test server',
    },
    {
      url: `http://localhost:${config.PORT}`,
    },
  ],
};

// Load extra YAML docs (kept in /docs folder)
const vaultDocs = YAML.load(path.join(__dirname, '../docs/swagger.yaml'));

const options = {
  swaggerDefinition,
  apis: [path.join(__dirname, '../routes/**/*.{js,ts}')],
};

let swaggerSpec = swaggerJSDoc(options);

swaggerSpec = {
  ...swaggerSpec,
  paths: {
    ...swaggerSpec,
    ...vaultDocs.paths,
  },
};

export default swaggerSpec;
