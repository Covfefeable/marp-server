FROM node:22

RUN sed -i 's/deb.debian.org/mirrors.aliyun.com/g' /etc/apt/sources.list.d/debian.sources
RUN sed -i 's/security.debian.org/mirrors.aliyun.com/g' /etc/apt/sources.list.d/debian.sources

WORKDIR /app

COPY . .

# RUN apt-get update && \
#     apt-get install -y \
#     chromium \
#     libreoffice-impress && \
#     rm -rf /var/lib/apt/lists/*

# Install Chromium
# (Use Chromium from "Playwright" instead of Puppeteer, for getting ARM64 build, which is not provided by Puppeteer)
RUN mkdir -p /tmp/marp-cli-chromium && \
  cd /tmp/marp-cli-chromium && \
  npm i playwright@latest && \
  PLAYWRIGHT_BROWSERS_PATH=/usr/local/bin/pw-browsers npx playwright install --with-deps chromium && \
  ln -s $(find /usr/local/bin/pw-browsers -name "chrome" -executable | head -n 1) /usr/local/bin/chrome && \
  rm -rf /tmp/marp-cli-chromium

# Install dependencies
RUN apt update && \
  apt install -y --no-install-recommends gosu && \
  apt clean && \
  rm -rf /var/lib/apt/lists/* && \
  npm cache clean --force

ENV CHROME_PATH=/usr/local/bin/chrome

ENV CI=true
ENV prod=true

RUN npm install -g pnpm pm2 @marp-team/marp-cli@latest

RUN pnpm install && pnpm build

EXPOSE 1337

CMD ["pm2-runtime", "start", "./build/app.js", "--name", "marp-server"]