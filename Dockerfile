# syntax=docker/dockerfile:1

FROM apache as img1
COPY . /usr/share/nginx/html

FROM nginx as img2
COPY . /usr/share/nginx/html
