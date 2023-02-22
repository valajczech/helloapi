import "dotenv/config";
import "module-alias/register";
import validateEnv from "@/utils/ValidateEnv";
import App from "./app";

// Controllers
import PostController from "@/resources/post/postController";
validateEnv();

const app = new App([new PostController()], Number(process.env.PORT));
app.listen();
