export const staticHtml = `
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <title>Marp Server API 文档</title>
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <style>
    body {
      font-family: 'Segoe UI', Arial, sans-serif;
      background: linear-gradient(135deg, #f8fafc 0%, #e0e7ef 100%);
      margin: 0;
      padding: 0;
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .container {
      background: #fff;
      border-radius: 16px;
      box-shadow: 0 8px 32px rgba(60, 60, 100, 0.12);
      padding: 40px 32px;
      max-width: 600px;
      text-align: left;
    }
    h1 {
      color: #2563eb;
      margin-bottom: 12px;
      font-size: 2.2rem;
      letter-spacing: 1px;
      text-align: center;
    }
    h2 {
      color: #2563eb;
      margin-top: 32px;
      margin-bottom: 10px;
      font-size: 1.3rem;
    }
    p {
      color: #374151;
      margin-bottom: 18px;
      font-size: 1.08rem;
    }
    code, pre {
      background: #f3f4f6;
      color: #2563eb;
      padding: 2px 6px;
      border-radius: 4px;
      font-size: 1rem;
    }
    pre {
      display: block;
      padding: 12px 10px;
      margin: 10px 0 18px 0;
      font-size: 0.98rem;
      color: #1e293b;
      background: #f8fafc;
      border-left: 4px solid #2563eb;
      border-radius: 6px;
      overflow-x: auto;
    }
    .endpoint {
      font-family: 'Fira Mono', monospace;
      font-size: 1rem;
      color: #1e293b;
      margin-bottom: 6px;
    }
    .method {
      font-weight: bold;
      color: #fff;
      background: #2563eb;
      border-radius: 4px;
      padding: 2px 8px;
      margin-right: 8px;
      font-size: 0.98rem;
      letter-spacing: 1px;
    }
    .get { background: #22c55e; }
    .post { background: #2563eb; }
    .tip {
      color: #64748b;
      font-size: 0.97rem;
      margin-top: 18px;
      text-align: center;
    }
    .footer {
      text-align: center;
      color: #b0b6c3;
      font-size: 0.95rem;
      margin-top: 32px;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>Marp Server API 文档</h1>
    <p>
      欢迎使用 <b>Marp Server</b>！<br>
      这是一个基于 <a href="https://marp.app/" target="_blank">Marp</a> 的幻灯片生成服务。<br>
      支持将 Markdown 一键转换为 PDF、HTML 或 PPTX 幻灯片文件。
    </p>

    <h2>接口列表</h2>
    <div class="endpoint">
      <span class="method get">GET</span> /api/probe
    </div>
    <p>健康检查，返回服务状态。</p>
    <pre>
响应示例:
{
  "code": 200,
  "data": { "status": "alive" },
  "message": "success"
}
    </pre>

    <div class="endpoint">
      <span class="method post">POST</span> /api/generate
    </div>
    <p>
      根据提交的 Markdown 内容生成幻灯片文件（支持 <code>.pdf</code>、<code>.html</code>、<code>.pptx</code>）。
    </p>
    <b>请求体 (JSON)：</b>
    <pre>
{
  "fileName": "example.pdf", // 文件名，支持 .pdf, .html, .pptx
  "content": "# Your Marp Markdown"
}
    </pre>
    <b>响应：</b>
    <p>生成的文件（二进制流，自动下载）。</p>

    <h2>示例</h2>
    <pre>
curl -X POST http://localhost:1337/api/generate \\
  -H "Content-Type: application/json" \\
  -d '{"fileName":"demo.pdf","content":"# Hello Marp\\n---\\n## Slide 2"}' \\
  --output demo.pdf
    </pre>

    <div class="tip">
      更多用法请参考 <a href="https://github.com/marp-team/marp-cli" target="_blank">Marp CLI</a> 或联系管理员。
    </div>
    <div class="footer">
      &copy; 2025 Marp Server
    </div>
  </div>
</body>
</html>
`