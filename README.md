# Unicorns Starter-Kit

<img src="resource/logo.png" width="200px">

This project is designed to simplify the lives of developers and reduce routine processes during setting up a project by automating them

---

## Required tools:

| Package | Version    |
|---------|------------|
| Docker  |`>= 19.03.8`|
| NodeJS  |`>= 13.7.0` |

<br />

# Table of Contents

1. [Installation](#Installation)
2. [Development](#Development)
3. [Deployment](#Deployment)
4. [Troubleshoot](#Troubleshoot)

---

## Installation

Make sure that you have installed all [required tools](#Required-tools) installed on your local machine.

### CMS
For install CMS dependencies run next command in your terminal

__within Docker__

```bash
$ cd cms
$ docker-compose up
```

__without Docker__

```bash
$ cd cms
$ npm i
```

### Frontend
For install Frontend dependencies run next command in your terminal

```bash
$ cd frontend
$ npm i
```

## Development
Before start development process make sure that you successfully completed [Instalation](#Installation) step

In first let's create `.env` file in project root directory and copy content from `.env.example` file to it. You should do this operation in `cms` directory as long as in `frontend`.

For starting development process run following commands in your terminal

__within Docker__

```bash
# window one
$ cd cms
$ cd docker-compose up

# window two
$ cd frontend
$ npm run develop
```

__without Docker__

Before run CMS should make one extra step. Open `.env` file in `cms` directory and update next line:

```yml
# [DATABASE]
# Use with docker
# DATABASE_HOST=postgres # old value

# Use with localhost
DATABASE_HOST=127.0.0.1 # new value
```

Now we can run CMS without docker container

```bash
# window one
$ cd cms
$ cd npm run develop

# window two
$ cd frontend
$ npm run develop
```

__within remote CMS__

If you want use data from remote CMS, you should update `.env` file in `frontend` directory

```yml
# CMS_URL=http://localhost:1337 # old value

CMS_URL=https://remote-cms-url.com # new value
```

## Deployment
Before deploy application make sure that you have credentials to Heroku and AWS accounts and installed Heroku CLI.

### Create heroku application:

Navigate to Heroku dashboard and click on __New > Create new app__

<details>
  <summary>Example</summary>
  <img src="./resource/heroku-1.png">
</details>

<br/>

Provide application name and select the region. _(The region should depends to client business location)_

<details>
  <summary>Example</summary>
  <img src="./resource/heroku-2.png">
</details>

<br/>

Add addons to application:

`Heroku Postgres` - Database
<br/>
`Papertrail` - Server Logs
<br/>
`Rollbar` - Error monitoring

<details>
  <summary>Example</summary>
  <img src="./resource/heroku-3.png">
</details>

<br/>

After application created open your terminal window and run the next command:

```bash
$ heroku stack:set container -a your_application
```

<br/>

Create S3 bucket

<details>
  <summary>Example</summary>
  <img src="./resource/heroku-3.png">
</details>

## Troubleshoot
