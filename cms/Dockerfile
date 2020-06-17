FROM node:13.7.0

ENV NODE_ENV production
ENV APP_ROOT /unicorns_cms

RUN mkdir ${APP_ROOT}
WORKDIR ${APP_ROOT}
ADD . ${APP_ROOT}

RUN npm install
RUN npm run build
