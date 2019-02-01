FROM nginx

RUN apt-get update && apt-get install -y \
    procps nano

RUN rm /etc/nginx/conf.d/default.conf

COPY ./nginx.conf /etc/nginx