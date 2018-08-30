const mongoose = require('mongoose');

mongoose.Promise = global.Promise;//Set mongoose to use native JS Promises

const {env} = process;

mongoose.connect(`mongodb://${env.DB_USER}:${env.DB_PASSWORD}@ds127842.mlab.com:27842/apitest`,
  {useMongoClient: true}
);