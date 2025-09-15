import swaggerJSDoc from 'swagger-jsdoc';
import path from 'path';
import {config} from '@/constants/index';

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'Moniehub X Fireblocks Relayer',
    version: '1.0.0',
    description: 'API documentation',
  },
  components: {
    securitySchemes: {
    },
  },
  servers: [
    {
      url: "https://xxx.com",
      description: "Production server",
    },
    {
      url: `http://localhost:${config.PORT}`,
    },
  ],
};

const options = {
  swaggerDefinition,
  apis: [path.join(__dirname, '../routes/**/*.{js,ts}')],
};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;
