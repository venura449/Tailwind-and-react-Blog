import express from 'express';
import mongoose from 'mongoose';

mongoose.connect('mongodb+srv://venurajayasingha1:gayasha123@cluster0.fjkwkzx.mongodb.net/?retryWrites=true&w=majority')
.then(()=>{
    console.log("Database connected");
})
const app = express();
const port = 3001;


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

app.on('error', (err) => {
    console.error('Error starting the server:', err.message);
});
