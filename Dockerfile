FROM node:18-alpine

MAINTAINER Vasyl

RUN mkdir /app

WORKDIR /app

COPY ./backend/package.json /app

RUN npm i
