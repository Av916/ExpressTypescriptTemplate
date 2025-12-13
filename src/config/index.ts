import dotenv from "dotenv";

type serverConfig = {
  PORT: number;
};

function loadEnv() {
  dotenv.config();
  console.log("Environment variable is loaded");
}

loadEnv();

export const serverConfig: serverConfig = {
  PORT: +(process.env.PORT ?? 3001),
};
