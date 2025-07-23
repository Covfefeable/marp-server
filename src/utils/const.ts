export const staticHtml = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <title>Marp Server</title>
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
            max-width: 480px;
            text-align: center;
          }
          h1 {
            color: #2563eb;
            margin-bottom: 12px;
            font-size: 2.2rem;
            letter-spacing: 1px;
          }
          p {
            color: #374151;
            margin-bottom: 24px;
            font-size: 1.1rem;
          }
          code {
            background: #f3f4f6;
            color: #2563eb;
            padding: 2px 6px;
            border-radius: 4px;
            font-size: 1rem;
          }
          .endpoint {
            background: #f1f5fd;
            border-left: 4px solid #2563eb;
            padding: 12px 16px;
            margin: 16px 0;
            font-family: 'Fira Mono', monospace;
            font-size: 1rem;
            color: #1e293b;
            border-radius: 6px;
            text-align: left;
            display: inline-block;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>Marp Server</h1>
          <p>
            欢迎使用 <b>Marp Server</b>！<br>
            这是一个基于 <a href="https://marp.app/" target="_blank">Marp</a> 的幻灯片生成服务。
          </p>
          <div class="endpoint">
            <b>生成文件接口：</b><br>
            <code>GET /api/generate</code>
          </div>
          <p>
            请通过 <code>/api/generate</code> 接口生成您的 Marp 幻灯片文件。
          </p>
          <p style="color:#64748b;font-size:0.95rem;">
            详细用法请参考 API 文档或联系管理员。
          </p>
        </div>
      </body>
      </html>
`