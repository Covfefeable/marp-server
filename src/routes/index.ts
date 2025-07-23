import { Express, Request, Response, Router } from "express";
import { commonRes } from "../utils/response";
import { staticHtml } from "../utils/const";
import { marpController } from "../controller";

export interface RouterConf {
  path: string;
  router: Router;
  meta?: unknown;
}

// 路由配置
const routerConf: Array<RouterConf> = [
  {
    path: "/api",
    router: Router().get("/probe", async (req: Request, res: Response) => {
      const result = {
        status: "alive",
      };
      res.status(200).send(commonRes(result));
    }),
  },
  {
    path: "/api",
    router: Router().post("/generate", async (req: Request, res: Response) => {
      marpController.generate(req, res);
    })
  }
];

function routes(app: Express) {
  // 根目录
  app.get("/", (req: Request, res: Response) =>
    res.status(200).send(staticHtml)
  );

  routerConf.forEach((conf) => app.use(conf.path, conf.router));
}

export default routes;
