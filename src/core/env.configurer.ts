import { DotenvConfigOptions, config } from "dotenv";

const configurer = (options?: DotenvConfigOptions | undefined) => {
  config(options);
  console.log(".env configured");
};

export default configurer;
