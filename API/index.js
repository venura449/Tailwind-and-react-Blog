import express from 'express';

const app = express();
const port = 3001;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

app.on('error', (err) => {
    console.error('Error starting the server:', err.message);
});
