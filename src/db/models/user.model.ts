import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
    {
        userId: { type: Number, required: true },
        image: { type: String, required: true }
    },
    {
        timestamps: false
    }
);

const UserModel = mongoose.model('User', userSchema);
export default UserModel;
