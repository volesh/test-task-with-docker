import 'reflect-metadata';
import express, {
    urlencoded, Request, Response, NextFunction
} from 'express';
import cors from 'cors';
import { envConfig } from './configs';

const app = express();

app.use(cors());
app.use(express.json());
app.use(urlencoded({ extended: true }));

// eslint-disable-next-line no-unused-vars
app.use((err:any, req:Request, res:Response, next:NextFunction) => {
    res.status(err.status || 500).json({
        errorMessage: err.message || 'Unknown error',
        statusCode: err.status || 500
    });
});

app.listen(envConfig.PORT, async ():Promise<void> => {
    console.log('Working, port listen :');
});
