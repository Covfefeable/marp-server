# Marp Server

基于 Express + TypeScript 的 Marp 幻灯片生成服务，支持将 Markdown 内容一键转换为 PDF、HTML 或 PPTX 幻灯片文件。

## 功能特性

- 📝 支持 Markdown 转换为 PDF/HTML/PPTX 幻灯片
- 🚀 TypeScript 全类型支持
- 🛡️ Helmet 安全防护
- 🔒 CORS 跨域配置
- 📋 Session 管理
- ⚙️ 环境变量管理（dotenv + envalid）
- 📝 Pino 日志系统
- 🐳 Docker 一键部署

## 目录结构

```
src/
  ├── app.ts              # 应用入口
  ├── controller/         # 控制器
  ├── model/              # 数据模型与校验
  ├── routes/             # 路由配置
  ├── service/            # 幻灯片生成逻辑
  ├── types/              # 类型定义
  └── utils/              # 工具函数
```

## 快速开始

1. **安装依赖**

   ```bash
   npm i -g pnpm
   pnpm install
   ```

2. **本地开发启动**

   ```bash
   pnpm dev
   ```

3. **访问服务**

   - 根页面: [http://localhost:1337/](http://localhost:1337/)
   - 健康检查: `GET /api/probe`
   - 幻灯片生成: `POST /api/generate`

## API 说明

### `POST /api/generate`

- **请求体**（JSON）:

  ```json
  {
    "fileName": "example.pdf", // 支持 .pdf, .html, .pptx
    "content": "# Your Marp Markdown"
  }
  ```

- **返回**: 生成的文件（二进制流，带下载）

### `GET /api/probe`

- 检查服务存活状态。

## 环境变量

在根目录创建 `.env` 文件，支持如下配置：

```env
NODE_ENV=development
PORT=1337
CORS_ORIGIN=*
SESSION_SECRET=your-secret
```

## Docker 部署

```bash
docker build -t marp-server .
docker run -p 1337:1337 marp-server
```

## 依赖技术

- Express, TypeScript, Helmet, CORS, Pino, dotenv, envalid, express-session, @marp-team/marp-cli

---

如需自定义或扩展功能，请参考源码。