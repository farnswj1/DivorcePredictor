# base image
FROM node:13.12.0-alpine

# set directory
WORKDIR /frontend

# add application and install dependencies
COPY package.json package-lock.json ./
RUN npm install
RUN npm install -g serve@13.0.2
COPY . ./

# setup the build
RUN npm run build

# run the build
CMD ["serve", "-s", "build"]
