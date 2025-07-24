FROM node:22

RUN sed -i 's/deb.debian.org/mirrors.aliyun.com/g' /etc/apt/sources.list.d/debian.sources
RUN sed -i 's/security.debian.org/mirrors.aliyun.com/g' /etc/apt/sources.list.d/debian.sources

WORKDIR /app

COPY . .

RUN apt-get update && \
    apt-get install -y \
    chromium \
    libreoffice-impress && \
    rm -rf /var/lib/apt/lists/*

ENV CHROME_BIN=/usr/bin/chromium

ENV CI=true
ENV prod=true

RUN npm install -g pnpm pm2 @marp-team/marp-cli@latest

RUN pnpm install && pnpm build

EXPOSE 1337

CMD ["pm2-runtime", "start", "./build/app.js", "--name", "marp-server"]