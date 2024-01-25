import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: { 
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
    },
    
},
{
    timestamps:true
}
);


// Create a model based on the schema
const User = mongoose.model('User', userSchema);

export default User;
