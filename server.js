import express from "express";
import path from "path";

const app = express();

app.use(express.static(path.join(process.cwd(), "dist")));

app.listen(3000, "0.0.0.0", () => {
  console.log("App listening on port 3000");
});
app.use((req, res, next) => {
  console.log("Client IP:", req.ip);
  next();
});
app.set("trust proxy", true);

app.use((req, res, next) => {
  console.log("Client IP:", req.ip);
  next();
});
