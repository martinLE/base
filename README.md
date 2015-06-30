[![Stories in Ready](https://badge.waffle.io/adeperio/base.png?label=ready&title=Ready)](https://waffle.io/adeperio/base) [![Stories in Progress](https://badge.waffle.io/adeperio/base.svg?label=in%20progress&title=In%20Progress)](http://waffle.io/adeperio/base)[![Security Backlog](https://badge.waffle.io/adeperio/base.svg?label=security&title=security)](http://waffle.io/adeperio/base)[![Backlog](https://badge.waffle.io/adeperio/base.svg?label=backlog&title=backlog)](http://waffle.io/adeperio/base)

# Base
![Alt text](/logo.png?raw=true "Base")

Base is a seed / starter kit for a modern web application stack, scaffolded out with a baseline level of security. Built with ReactJS, Flux, Express, and Postgres.

## Why

##### A starter kit and reference implementation for Facebook's ReactJS+Flux.
We love React+Flux and think you will to. Base scaffolds out React components along with related Flux actions and stores, and provides a starter framework for getting a ReactJS front-end chatting with an Express / Postgres back-end.

##### Secure web application stack using OAuth2.
We wanted a starter kit that scaffolds out a baseline implementation of a modern secure web application.

##### A light and scalabale Web Server
Express and NodeJS provides a powerful and scalable web stack as a base. Other than this, we don't impose any other framework choice on the server side.

##### An RDBMS Alternative
MongoDB is a very popular persistent store on the web, and with many good reasons. But we thnk there are many apps out there where an RDBMs is still the most relevant choice. We chose Postgres as a fast, scalable, open source, and well supported RDBMS option.

## Features

The Stack:

Gulp + Webpack + React + Flux + Express + Postgres + Passportjs + Bootstrap + Jade + Mocha + Chai.

1. React+Flux Scaffolding
2. React-router
3. WebPack+Gulp
4. Postgres
5. NodeJS Express web server  

Security:

1. PassportJS for OAuth2
2. Social logins (Google and Facebook)
3. HelmetJS for header protection mechanisms
4. TLS/SSL By default
5. XSS protections
6. CSRF protections
7. Secure sessions

## Installation

### Requirements

#### A working instance of Postgres
The latest version of Postgresql can be found here: http://www.postgresql.org/download/

#### Google and Facebook apps

To sign-in using login with Google and Facebook, you will need to setup your app for OAuth with each provider.

##### Google

Google apps can be setup at console.developers.google.com. In order to use get user information from Google sign-in, we need the following scopes enabled for your application:

* https://www.googleapis.com/auth/plus.login
* https://www.googleapis.com/auth/userinfo.email
* https://www.googleapis.com/auth/userinfo.profile

#### Facebook

Facebook apps can be setup for OAuth2 at https://developers.facebook.com/. Facebook oauth also needs the following scopes enabled:

* email
* public_profile

### Setup

#### Clone

Base uses Gulp + Webpack as it's build system. To install base for your app:

```shell
$ git clone https://git@github.com:adeperio/base.git MyApp
$ cd MyApp
$ npm install -g gulp           # Install Gulp task runner globally
$ npm install                   # Install Node.js components listed in ./package.json
```
### Setting your configs

There is a config.sample.js file in the src/server directory. Before running the server, create a config.js file from this sample file and enter your OAuth2 sign in credentials from your auth provider (clientID, clientSecret, callbackURL).

#### Bootstrap

Once you clone the repo and install the dependencies, you will need to bootstrap the database with the initial table

### Production Build

```shell
gulp build:dist --release
```

### Config

There is a config.sample.js file in the src/server directory. Before running the server, create a config.js file from this sample file and enter your OAuth2 sign in credentials from your auth provider (clientID, clientSecret, callbackURL).

### Database

You will also need to ensure that you have a running instance of Postgresql and correctly bootstrapped with the correct database tables. The connection string for the DB should be entered in your config.js file (e.g. postgres://postgres:postgres@localhost:5432/base).

To bootstrap the database, simply run:

```shell
$ gulp bootstrap
```

To run the application, run:

```shell
$ gulp
```

### Tests

Base has a suite of tests that runs against a test database. To run the tests, you will need to make sure you have a running instance of a test Postgres db (e.g. postgres://postgres:postgres@localhost:5432/base-test). The settings for this can be entered under the "TEST" NODE_ENV section of the config.js file.

Base uses Mocha + Chai as its test framework.

Once this is setup, run the tests by:

```shell
$ gulp test
```
