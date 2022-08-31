# syntax=docker/dockerfile:1

FROM nginx
COPY . /usr/share/nginx/html
