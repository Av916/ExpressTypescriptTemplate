import express from "express";
import { serverConfig } from "./config";
import v1Router from "./routers/v1/index.router";
import v2Router from "./routers/v2/index.router";

const app = express();

app.use(express.json())

/*
 * registering all the router in and version
 */

app.use("/api/v1", v1Router);
app.use("/api/v2", v2Router);


app.listen(serverConfig.PORT, () => {
  console.log(`app is listening on http://127.0.0.1:${serverConfig.PORT}`);
  console.log(`Press Ctrl + c to close server`);
});
