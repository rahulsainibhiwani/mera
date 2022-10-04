import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDb } from "./connectDB.js";
import userRoute from "./Routes/userRoutes.js";
import { errorHandler } from "./middleware/errorMiddleware.js";

dotenv.config();
connectDb();
const app = express();
app.use(cors());

app.use(express.json());

app.use("/user", userRoute);
app.use(errorHandler);
app.use(errorHandler);
const PORT = process.env.PORT || 1111;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
