import { Log } from "./src/logger.js";

const reponse = await Log(
    "backend",
    "error",
    "handler",
    "testing logger middleware"
);

console.log(reponse);