import express from "express";
import authRoutes from "./routes/auth.js";

// INIT
const PORT = process.env.PORT || 8800;
const app = express();

// middlewares
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Credentials", true);
    next();
});

app.use(express.json());

// app.use(
//     cors({
//         origin: "http://localhost:3000",
//     })
// );

app.use("/api/auth", authRoutes);


app.listen(PORT, "0.0.0.0", () => {
    console.log(`connected at port ${PORT}`);
  });
