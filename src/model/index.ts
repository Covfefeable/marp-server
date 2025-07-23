import { z } from "zod";

// 定义 marp 请求的验证 schema
export const MarpSchema = z.object({
    fileName: z.string()
        .min(1, "文件名不能为空")
        .regex(/\.(pdf|html|pptx)$/, "文件名必须以 .pdf、.html 或 .pptx 结尾"),
    content: z.string().min(1, "内容不能为空"),
});

// 使用 typeof 导出类型
export type MarpInput = z.infer<typeof MarpSchema>;
