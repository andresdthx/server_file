import mongoose from 'mongoose';

const HOST = process.env.MONGODB_HOST || 'localhost';
console.log(HOST)
mongoose.connect (process.env.MONGODB_URL || `mongodb://${HOST}:27017/practicanode`);