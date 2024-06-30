import express, { Request, Response, NextFunction } from "express";
import { initialize } from "express-openapi";
import path from "path";
import OpenAPIResponseValidator from "openapi-response-validator";
import apiDoc from "./openapi/openapi.js";
import router from "./infrastructure/router.js";
import { controllers } from "./presentation/controller/index.js";
const app = express();
const port = process.env.PORT || 3000;
const __dirname = path.dirname(new URL(".", import.meta.url).pathname);

app.use("/api", router);

app.listen(3000, () => {
    console.log("Start on port 3000");
});

// app.get("/user", (req: Request, res: Response) => {
//     res.send({
//         name: "hatano",
//     });
// });
// console.log(path.resolve(__dirname, "/src/openapi/openapi.yaml"));
initialize({
    app: app,
    apiDoc: apiDoc,
    validateApiDoc: true,
    operations: controllers,
});

// app.get("/", (req, res) => {
//     res.send("Hello from TypeScript!");
// });

// app.listen(port, () => {
//     console.log(`Server listening on port ${port}`);
// });
