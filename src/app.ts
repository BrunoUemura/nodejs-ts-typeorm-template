import * as express from "express";
import * as cors from "cors";
import * as logger from "morgan";
import { routes } from "./routes";
import "./database";

export const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(logger("dev"));
app.use(routes);
