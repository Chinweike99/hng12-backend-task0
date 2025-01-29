
import express from 'express';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 3200;

//Enable cors
app.use(cors());

app.get('/', (req, res) =>{
    const response = {
        email: "chinweiketwitter@gmail.com",
        currentDateTime: new Date().toISOString(),
        githubUrl: "https://github.com/Chinweike99"
    };
    res.status(200).json(response);
});

app.listen(port, ()=>{
    console.log(`Server running on port ${port}`);
});