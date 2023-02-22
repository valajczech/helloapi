// Imports
import express, { Application } from "express";
import mongoose from "mongoose";
import cors from "cors";
import compression from "compression";
import helmet from "helmet";
import morgan from "morgan";
import Controller from "@/utils/interfaces/IController";
import ErrorMiddleware from "@/middleware/Error";

class App {
  public express: Application;
  public port: Number;

  constructor(controllers: Array<Controller>, port: Number) {
    this.express = express();
    this.port = port;

    this.initDatabaseConnection();
    this.initMiddleware();
    this.initControllers(controllers);
    this.initErrorHandling();
  }

  private initMiddleware(): void {
    this.express.use(helmet());
    this.express.use(cors());
    this.express.use(morgan("dev"));
    this.express.use(express.json());
    this.express.use(
      express.urlencoded({
        extended: false,
      })
    );
    this.express.use(compression());
  }

  private initControllers(controllers: Array<Controller>): void {
    controllers.forEach((c: Controller) => {
      this.express.use("/api", c.router);
    });
  }

  private initErrorHandling(): void {
    this.express.use(ErrorMiddleware);
  }
  private initDatabaseConnection(): void {
    const { MONGO_USER, MONGO_PWD, MONGO_PATH } = process.env;
    //mongoose.connect()
  }

  public listen(): void {
    this.express.listen(this.port, () => {
      console.log("App is running on port: ", this.port);
    });
  }
}

export default App;
