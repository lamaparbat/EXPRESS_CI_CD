const cors = require('cors');
const dotenv = require('dotenv');
const express = require('express');
const { startMongoConnection } = require('./services/mongodb');

dotenv.config();

startMongoConnection().then((res) => {
    console.log('Mongodb connection successfull ...');

    const app = express();
    const port = process.env.PORT || 8000;

    app.use(cors());
    app.use(express.json());

    app.listen(port, () => console.log(`Server listening on ${port}`));
})
