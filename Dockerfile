# syntax=docker/dockerfile:1

FROM nginx:stable
COPY . /usr/share/nginx/html
LABEL org.opencontainers.image.authors="18339050+willtheorangeguy@users.noreply.github.com"# syntax=docker/dockerfile:1
