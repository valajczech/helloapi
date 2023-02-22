import { cleanEnv, str, port } from "envalid";

function validateEnv(): void {
  cleanEnv(process.env, {
    NODE_ENV: str({
      choices: ["development", "production"],
    }),
    MONGO_PWD: str(),
    MONGO_PATH: str(),
    MONGO_USR: str(),
    PORT: port({
      default: 8080,
    }),
  });
}

export default validateEnv;
