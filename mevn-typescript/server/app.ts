import express from 'express'
import morgan from 'morgan';
import cors from 'cors';

import tasksRoutes from './routes'
import UserRoutes from './routes/userIndex'
import dataRoute from './routes/dataIndex'

const app = express()

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use("/api", tasksRoutes);
app.use("/api", UserRoutes);
app.use("/api", dataRoute);
export default app; 
