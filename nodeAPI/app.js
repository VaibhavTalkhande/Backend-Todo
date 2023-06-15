import express from 'express';
import UserRouter from './routes/user'; 
import { connectDB } from './data/database';
import { config } from 'dotenv';
connectDB();
config(
    {
        path: './data/config.env',
    }
);

export const app = express();
app.use(express.json());
app.use("/users",UserRouter); 
app.get('/', (req, res) =>{
    res.send('Hello World');
}
);


