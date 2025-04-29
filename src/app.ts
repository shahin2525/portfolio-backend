import express, { Request, Response } from 'express';
import cors from 'cors';
import router from './app/routes';
import errorHandler from './app/middlewares/errorHandlers';
const app = express();
app.use(express.json());
// app.use(cookieParser());
app.use(cors({ origin: ['http://localhost:3000'] }));

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.use('/api', router);
app.use(errorHandler);
// not found route
app.all('*', (req, res) => {
  res.status(404).send('404! Page not found');
});

export default app;
