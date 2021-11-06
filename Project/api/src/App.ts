import cookieParser from "cookie-parser";
import express, { Application, Request, Response, NextFunction } from "express";
import morgan from "morgan";
import config from "./lib/config";
import routes from "./routes/index";
const app: Application = express();
var cors = require("cors");

app.use(express.urlencoded({ extended: true, limit: "50mb" })); //middleware
app.use(express.json({ limit: "50mb" }));
app.use(cookieParser());
app.use(morgan("dev"));

app.use(
  cors({
    origin: config.cors,
    credentials: true,
    methods: ["GET", "POST", "OPTIONS", "PUT", "DELETE"],
    allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept"],
  })
);

app.use("/api", routes);

//Test!!
/* app.get('/', (req: Request, res: Response) => {
	res.send('hola typescript!');
}); */
//

interface error {
  status: number;
  message: string;
}
app.use((err: error, req: Request, res: Response, next: NextFunction) => {
  // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

export default app;
