FROM node:18-alpine

WORKDIR /app

COPY . .

RUN apk add --no-cache \
    chromium \
    firefox \
    libreoffice-impress \
    && rm -rf /var/cache/apk/*

ENV CHROME_BIN=/usr/bin/chromium-browser \
    FIREFOX_BIN=/usr/bin/firefox

ENV CI=true

ENV prod=true

RUN npm install -g pnpm pm2 @marp-team/marp-cli@latest

RUN pnpm install && pnpm build

EXPOSE 1337

CMD ["pm2-runtime", "start", "./build/app.js", "--name", "marp-server"]