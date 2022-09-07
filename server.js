import cors from 'cors';
import express from 'express';
import models from './models/index.js';
//import index from './routes/index.js';
import message from './routes/message.js';
import session from './routes/session.js';
import user from './routes/user.js';


const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  req.context = {
    models,
    me: models.users[1],
  };
  next();
});

app.use('/session', session);
app.use('/users', user);
app.use('/messages', message);

app.listen('3000', () =>
  console.log(`Example app listening on port 3000!`),
);
