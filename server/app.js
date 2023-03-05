import express from 'express';
import aiFeedbackRouter from './routes/ai-feedback.js';
import cors from 'cors';
import morgan from 'morgan';

const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan('tiny'));

app.use('/ai-feedback', aiFeedbackRouter);

export default app;
