import HttpException from "@/utils/exceptions/Http";
import Controller from "@/utils/interfaces/IController";
import { Router, Request, Response, NextFunction } from "express";
import IProject from "./IProject";
import projectService from "./projectService";

class ProjectController implements Controller {
  public path: string = "/projects";
  public router: Router = Router();
  private projectService = new projectService();
  constructor() {
    this.initRoutes();
  }

  private initRoutes(): void {
    this.router.get(`${this.path}`, this.getAllProjects);
  }

  private getAllProjects = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> => {
    try {
      res.send({
        data: {
          projects: ["projectOne", "projectTwo"],
        },
      });
    } catch (e: any) {
      next(new HttpException(400, e.message));
    }
  };
}

export default ProjectController;
