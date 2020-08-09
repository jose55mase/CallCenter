import mongoose from 'mongoose'
//import {mongodb} from './keys';
const { mongodb } = require('./keys');

mongoose.connect(mongodb.mongo, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(db => console.log('DB is connected'))
    .catch(err => console.error(err));
