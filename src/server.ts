import 'module-alias/register';
import express from 'express';
import cors from 'cors';
import V1Routes from '@/routes/index';
import {errorHandler} from '@/middlewares/errorHandler';
import morgan from 'morgan';
import {config} from '@/constants/index';
import {AppError} from '@/utils/AppError';
import cookieParser from 'cookie-parser';
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from '@/utils/swagger';

// TODO
// Save the webhook body in a table called webhooks
// check if webhook exist, if it doesm, return status code to show that we have it and should stop sending

// create a model/table called WebHook
// create a coolumn called event, referene, provider, data of type json object

// transaction table shluld have data: json object
// store payload coming from the webhook in the webhook
// external refrene field
// userId
// data: store extact payload coming from the webhooknotifiaction

// update the balance in the wallet after recording the tranaction

// i hae to include a header, that server 1 has to alwways pass in the header to confirm it's from server 1

const app = express();

const corsOptions = {
  origin: '*',
  credentials: true, // Allow credentials (cookies)
  optionsSuccessStatus: 200, // Some legacy browsers choke on 204
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(morgan('dev'));
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

app.use('/api', V1Routes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// 404 Handler
app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(errorHandler);

app.listen(config.PORT, () => {
  console.log('Application started with config Loaded up✅');
  console.log(`Server running on port ${config.PORT}`);
  console.log(
    `API documentation available at 📝📚 http://localhost:${config.PORT}/api-docs`
  );
});
