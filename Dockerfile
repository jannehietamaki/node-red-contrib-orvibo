ARG BUILD_FROM=hassioaddons/base:6.0.1
FROM $BUILD_FROM

ENV LANG C.UTF-8

ADD package.json /

RUN apk add --no-cache nodejs-npm jq && \
npm install

COPY run.sh /
RUN chmod a+x /run.sh

CMD [ "/run.sh" ]
