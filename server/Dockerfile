# pull the Node.js Docker image
FROM node:alpine

# create the directory inside the container
RUN mkdir /app
WORKDIR /app

# copy the package.json files from local machine to the workdir in container
COPY package.json /app

# run npm install
RUN npm install
COPY . /app

# our app is running on port 5000 within the container, so need to expose it
EXPOSE 6001

# the command that starts our app
CMD ["npm", "start"]
