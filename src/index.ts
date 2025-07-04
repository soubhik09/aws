import express, { Request, Response } from "express";
import route from "./routes";
import dotenv from "dotenv";
import sequelize from "./db";

const app = express();
dotenv.config();
const PORT = process.env.PORT || 3000;

const db = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    console.log("DB Connected Successfully✅");
  } catch (error) {
    console.log("Unable to connect db", error);
  }
};

db();

app.use(express.json({ limit: "500mb" }));
app.use(express.urlencoded({ extended: false, limit: "500mb" }));

app.get("/health-check", (req: Request, res: Response) => {
  res.send("Hello from Severless✅");
});

app.use("/api", route);

app.listen(PORT, () => {
  console.log(
    `Server is running at ${process.env.PORT} in ${process.env.NODE_ENV} mode`
  );
});

export default app;
