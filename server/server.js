import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import swaggerSetup from "./src/middleware/swagger.js" 
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
swaggerSetup(app);

app.get('/', (req, res) => {
    res.send('Hello, World!');
  });

mongoose.connect( process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
