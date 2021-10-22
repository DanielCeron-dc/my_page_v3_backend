//create a normal express server with typescript
import express from 'express';
import mongoose from 'mongoose';

import { config } from './config';
import  router  from './routes/routes';

const app = express();

app.use(express.json());
app.use(router); 

mongoose.connect(config.db.uri).then(() => {
    console.log('Connected to MongoDB');
    app.listen(config.port, () => {
        console.log('App listening on port 5000!');
    });
}).catch(err => {
    console.log('Could not connect to MongoDB');
    console.log(err);
});