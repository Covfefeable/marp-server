import { Request, Response } from "express";
import { commonError, commonRes } from "../utils/response";
import { MarpSchema } from "../model";
import { marpService } from "../service";

class MarpController {
  public generate = async (req: Request, res: Response) => {
    try {
      // 或者使用以下方式进行类型检查
      const validatedData = MarpSchema.parse(req.body);
      const { fileName, content } = validatedData;
      const serviceResponse = await marpService.generate(fileName, content);
      const ext = fileName.split(".").pop()?.toLowerCase();
      let type = "application/octet-stream";
      if (ext === "pdf") type = "application/pdf";
      else if (ext === "html") type = "text/html";
      else if (ext === "pptx")
        type =
          "application/vnd.openxmlformats-officedocument.presentationml.presentation";
      res
        .status(200)
        .set({
          "Content-Type": type,
          "Content-Disposition": `attachment; filename="${fileName}"`,
        })
        .send(serviceResponse);
    } catch (error) {
      res.status(200).send(commonError(400, error as string));
      return;
    }
  };
}

export const marpController = new MarpController();
