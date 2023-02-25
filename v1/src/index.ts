import "dotenv/config";
import "module-alias/register";
import validateEnv from "@/utils/ValidateEnv";
import App from "./app";

// Controllers
import PostController from "@/resources/post/postController";
import ProjectController from "./resources/project/projectController";
validateEnv();

const app = new App(
  [new PostController(), new ProjectController()],
  Number(process.env.PORT)
);
app.listen();
