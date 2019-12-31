require('dotenv').config();
import express, {Application, Request, Response, NextFunction} from 'express';
const app: Application = express();
import * as bodyParser from 'body-parser';
import path from 'path';
// Routes
import {router as homeRouter} from './routes/home';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', 'dist/views');

app.use('/', homeRouter);

app.listen(3000, () => console.log('Server running...'));
