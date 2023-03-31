const mongoose = require('mongoose');

require('dotenv').config();

// Update below to match your own MongoDB connection string.
const MONGO_URL = 'mongodb+srv://ogunbanjopeter:HxMFiIWSpc9joZ5u@cluster2.r8dzeiy.mongodb.net/natours?retryWrites=true';

mongoose.connection.once('open', () => {
    console.log('MongoDB connection ready!');
});

mongoose.connection.on('error', (err) => {
    console.error(err);
});

async function mongoConnect() {
    await mongoose.connect(MONGO_URL, {
        useNewUrlParser: true,
        useFindAndModify: false,
        useCreateIndex: true,
        useUnifiedTopology: true
    });
}

async function mongoDisconnect() {
    await mongoose.disconnect();
    await mongoose.connection.close();
};

module.exports = {
    mongoConnect,
    mongoDisconnect,
};
