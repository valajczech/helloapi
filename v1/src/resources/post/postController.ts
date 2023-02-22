import { Router, Request, Response, NextFunction } from "express";
import Controller from "@/utils/interfaces/IController";
import HttpException from "@/utils/exceptions/Http";
import validationMiddleware from "@/middleware/Validation";
import validation from "@/resources/post/postValidation";
import PostService from "@/resources/post/postService";

class PostController implements Controller {
  public path: String = "/posts";
  public router: Router = Router();
  private PostService = new PostService();
  constructor() {
    this.initRoutes();
  }

  private initRoutes(): void {
    this.router.post(
      `${this.path}`,
      validationMiddleware(validation.create),
      this.create
    );
  }
  private create = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> => {
    try {
      const { title, body } = req.body;
      const post = await this.PostService.create(title, body);
      res.status(201).json({ post });
    } catch (e: any) {
      next(new HttpException(400, e.message));
    }
  };
}

export default PostController;
