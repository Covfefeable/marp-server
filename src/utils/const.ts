export const staticHtml = `
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <title>Marp Server API 文档</title>
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
  <style>
    * {
      box-sizing: border-box;
    }
     
    body {
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      margin: 0;
      padding: 20px;
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      animation: fadeIn 0.8s ease-out;
    }
     
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
     
    @keyframes slideIn {
      from { opacity: 0; transform: translateX(-20px); }
      to { opacity: 1; transform: translateX(0); }
    }
     
    .container {
      background: rgba(255, 255, 255, 0.95);
      backdrop-filter: blur(20px);
      border-radius: 24px;
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1), 0 8px 32px rgba(0, 0, 0, 0.08);
      padding: 48px 40px;
      max-width: 900px;
      width: 100%;
      text-align: left;
      border: 1px solid rgba(255, 255, 255, 0.2);
      animation: slideIn 0.6s ease-out 0.2s both;
    }
     
    h1 {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      margin-bottom: 16px;
      font-size: 2.8rem;
      font-weight: 700;
      letter-spacing: -0.5px;
      text-align: center;
      line-height: 1.2;
    }
     
    .subtitle {
      text-align: center;
      color: #64748b;
      font-size: 1.1rem;
      margin-bottom: 32px;
      font-weight: 400;
    }
     
    h2 {
      color: #1e293b;
      margin: 40px 0 20px 0;
      font-size: 1.5rem;
      font-weight: 600;
      position: relative;
      padding-left: 16px;
    }
     
    h2::before {
      content: '';
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      width: 4px;
      height: 24px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      border-radius: 2px;
    }
     
    p {
      color: #475569;
      margin-bottom: 20px;
      font-size: 1rem;
      line-height: 1.6;
      font-weight: 400;
    }
     
    .intro {
      background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
      border-radius: 16px;
      padding: 24px;
      margin-bottom: 32px;
      border-left: 4px solid #667eea;
    }
     
    code {
      background: linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%);
      color: #7c3aed;
      padding: 4px 8px;
      border-radius: 6px;
      font-size: 0.9rem;
      font-family: 'JetBrains Mono', 'Fira Code', monospace;
      font-weight: 500;
      border: 1px solid #e2e8f0;
    }
     
    pre {
      background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
      color: #e2e8f0;
      padding: 20px;
      margin: 16px 0 24px 0;
      font-size: 0.9rem;
      border-radius: 12px;
      overflow-x: auto;
      font-family: 'JetBrains Mono', 'Fira Code', monospace;
      line-height: 1.5;
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
      border: 1px solid #475569;
    }
     
    .api-section {
      background: #ffffff;
      border-radius: 16px;
      padding: 24px;
      margin: 24px 0;
      box-shadow: 0 4px 16px rgba(0, 0, 0, 0.04);
      border: 1px solid #e2e8f0;
      transition: all 0.3s ease;
    }
     
    .api-section:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
    }
     
    .endpoint {
      font-family: 'JetBrains Mono', monospace;
      font-size: 1.1rem;
      color: #1e293b;
      margin-bottom: 12px;
      display: flex;
      align-items: center;
      gap: 12px;
    }
     
    .method {
      font-weight: 600;
      color: #fff;
      border-radius: 8px;
      padding: 6px 12px;
      font-size: 0.85rem;
      letter-spacing: 0.5px;
      text-transform: uppercase;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
      transition: all 0.2s ease;
    }
     
    .method:hover {
      transform: translateY(-1px);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    }
     
    .get { 
      background: linear-gradient(135deg, #10b981 0%, #059669 100%);
    }
     
    .post { 
      background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
    }
     
    .put { 
      background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
    }
     
    .delete { 
      background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
    }
     
    ul {
      padding-left: 20px;
    }
     
    li {
      margin-bottom: 8px;
      color: #475569;
      line-height: 1.5;
    }
     
    .tech-stack {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 20px;
      margin: 25px 0;
    }
     
    .tech-item {
      background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
      color: white;
      padding: 20px;
      border-radius: 12px;
      text-align: center;
      box-shadow: 0 8px 25px rgba(240, 147, 251, 0.3);
      transition: all 0.3s ease;
    }
     
    .tech-item:hover {
      transform: translateY(-5px);
      box-shadow: 0 15px 35px rgba(240, 147, 251, 0.4);
    }
     
    .tech-item strong {
      display: block;
      font-size: 18px;
      margin-bottom: 8px;
    }
     
    .tech-item small {
      opacity: 0.9;
      font-size: 14px;
    }
     
    .tip {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      padding: 20px;
      border-radius: 12px;
      text-align: center;
      margin: 32px 0;
      box-shadow: 0 8px 32px rgba(102, 126, 234, 0.3);
    }
     
    .footer {
      text-align: center;
      color: #64748b;
      font-size: 0.95rem;
      margin-top: 32px;
      opacity: 0.8;
    }
     
    a {
      color: #667eea;
      text-decoration: none;
      font-weight: 500;
      transition: all 0.2s ease;
    }
     
    a:hover {
      color: #764ba2;
      text-decoration: underline;
    }
     
    b {
      font-weight: 600;
      color: #1e293b;
    }
     
    @media (max-width: 768px) {
      body {
        padding: 10px;
      }
       
      .container {
        padding: 32px 24px;
        margin: 10px;
      }
       
      h1 {
        font-size: 2.2rem;
      }
       
      .endpoint {
        flex-direction: column;
        align-items: flex-start;
        gap: 8px;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>Marp Server API 文档</h1>
    <div class="intro">
      <p>
        欢迎使用 <b>Marp Server</b>！<br>
        这是一个基于 <a href="https://marp.app/" target="_blank">Marp</a> 的幻灯片生成服务。<br>
        支持将 Markdown 一键转换为 PDF、HTML 或 PPTX 幻灯片文件。
      </p>
    </div>

    <h2>接口列表</h2>
    <div class="api-section">
      <div class="endpoint">
        <span class="method get">GET</span>
        <span>/api/probe</span>
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
    </div>

    <div class="api-section">
      <div class="endpoint">
        <span class="method post">POST</span>
        <span>/api/generate</span>
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
    </div>

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