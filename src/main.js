import express from "express";
import helmet from "helmet";
import compression from "compression";
import cors from "cors";
import router from "./routes/index.js";

const server = express();

server.use(express.json());
server.use(cors());
server.use(helmet());
server.use(compression());
server.use(router);

server.listen(7000, function () {
  console.log("Server online on port 7000");
});
