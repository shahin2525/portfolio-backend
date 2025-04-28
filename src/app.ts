import express, { Request, Response } from 'express';
import cors from 'cors';
import router from './app/routes';
const app = express();
app.use(express.json());
// app.use(cookieParser());
app.use(cors({ origin: ['http://localhost:3000'] }));

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.use('/api', router);

export default app;
