import express from "express";
import cors from "cors";
import mongoose from "mongoose";

const app = express();

app.use(cors())

const CONNECTION_URL = 'mongodb+srv://Abdul:Makers123@cluster0.gln4g.mongodb.net/myFirstDatabase?retryWrites=true&w=ma  jority';
const PORT = process.env.PORT || 3030;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
  .catch((error) => console.log(error.message))
  
  