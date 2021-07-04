import mongoose from 'mongoose';
import dotenv from 'dotenv';

import { quotes } from './libs/data';
import Quote from './models/Quote';

dotenv.config();

// 1. Connect DB

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() => console.log('DB CONNECTED 🔥'))
  .catch(err => console.log(err.message));

// 2. Import Data

const importData = async () => {
  try {
    await Quote.deleteMany();
    await Quote.insertMany(quotes);

    console.log('Data imported');
    process.exit(0);
  } catch (error) {
    console.log('Data not imported');
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Quote.deleteMany();

    console.log('Data deleted');
    process.exit(0);
  } catch (error) {
    console.log('Data not deleted');
    process.exit(1);
  }
};

if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}
