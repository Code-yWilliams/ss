# base image
FROM ruby:3.2.2-bullseye as base 

# install curl
RUN apt update
RUN apt upgrade -y
RUN apt install -y curl

# install node 20
RUN curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
RUN apt install -y nodejs

# set container's working directory
WORKDIR /docker/app

# copy all app files to working directory
ADD . /docker/app

# install gems
RUN gem install bundler
COPY Gemfile* ./
RUN bundle install

# install and run yarn
RUN apt remove cmdtest
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list
RUN apt update && apt install yarn
RUN apt install yarn -y
RUN yarn set version berry
COPY package.json yarn.lock
RUN yarn install

# run the app
ARG PORT 3000
EXPOSE ${PORT}
CMD [ "yarn", "start" ]
