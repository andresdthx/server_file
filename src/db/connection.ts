import mongoose from 'mongoose';
mongoose.connect (process.env.MONGODB_URL || 'mongodb://localhost:27017/practicanode');