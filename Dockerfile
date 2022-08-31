# syntax=docker/dockerfile:1

FROM nginx
COPY . /usr/share/nginx/html
LABEL org.opencontainers.image.description A simple under construction landing page.
