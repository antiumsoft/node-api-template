// const express = require('express');
import express from 'express';
import path from 'path';

const __dirname = path.dirname(new URL(import.meta.url).pathname);

import cookieParser from 'cookie-parser';
import logger from 'morgan';

import indexRouter from './routes/index.js';
import usersRouter from './routes/users.js';

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

export default app;
