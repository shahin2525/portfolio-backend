import express, { Request, Response } from 'express';
import cors from 'cors';
import router from './app/routes';
import errorHandler from './app/middlewares/errorHandlers';
const app = express();
app.use(express.json());
// app.use(cookieParser());
app.use(cors({ origin: ['http://localhost:3000'], credentials: true }));

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.use('/api/', router);
app.use(errorHandler);

// not found route

// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
app.use((req, res, next) => {
  res.status(404).render('404', { title: 'Page Not Found' });
});

export default app;
