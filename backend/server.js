const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const heritageRoutes = require("./routes/heritageRoutes");

// 1. Load environment variables FIRST before calling connectDB()
dotenv.config();

// 2. Now connect to the database (it can now safely read process.env.MONGO_URI)
connectDB();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/sites",heritageRoutes);

//routes
const authRoutes = require("./routes/authRoutes");
 const activationRoutes = require("./routes/activationRoutes");

app.use("/api/auth",authRoutes);
 app.use("/api/activation",activationRoutes);

 

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
