FROM node:13.7.0

ENV NODE_ENV production
ENV APP_ROOT /srv/app

RUN mkdir ${APP_ROOT}
WORKDIR ${APP_ROOT}
ADD . ${APP_ROOT}

RUN npm ci
RUN npm run build
