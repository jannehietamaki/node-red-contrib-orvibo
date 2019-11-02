ARG BUILD_FROM
FROM $BUILD_FROM

ENV LANG C.UTF-8

ADD package.json /

RUN apk add --no-cache nodejs-npm jq && \
npm install

COPY run.sh /
RUN chmod a+x /run.sh

CMD [ "/run.sh" ]