![unikorns-logo-horizontal](https://user-images.githubusercontent.com/15017363/89563653-0dc63980-d81c-11ea-910a-ec4cd13d7a0b.png)

# Unikorns StarterKit (Gatsby + Strapi)

This project is designed to simplify developers lives and reduce routine processes during setting up a [Gatsby](https://www.gatsbyjs.org/) and [Strapi](https://strapi.io/) projects

---

## Required tools:

| Package | Version    |
|---------|------------|
| Docker  |`>= 19.03.8`|
| NodeJS  |`>= 13.7.0` |


1. [Get started](#markdown-header-get-started)
2. [Development](#markdown-header-development)
3. [Deployment](#markdown-header-deployment)

---

## Get started

Before that make sure that you have all required tools installed on your local machine.

Then:

1. Open our Bitbucket
2. Create new empty project repository
3. Open unikorns.straterkit repository
4. Copy link for cloning
5. Clone unikorns.straterkit repository to your local
6. Open cloned project
7. While in the project directory write `git remote -v` in command line. As a response you can see that `remote origin` it set on template repo. We're going to change it.
8. For that open empty project repo created on our Bitbucket
9. Copy repo git address (all after `git clone`)
10. Return to the IDE and write following command in Terminal: `git remote set-url origin <paste copied repo git address here>` 
11. Alright, we're almost there. Now we should check if address was set correctly. To do that just hit `git remote -v` again. If you see new address we are on the right way. Go next ⇒
12. Now we should push configurated project to the remote. For that write `git push` in Terminal.
13. Amazing! Now we can change the default name of the project folder from `unikorns.straterkit` to `<project name>` and start working on that.

### Frontend

Go to frontend folder of the project and install all needed npm modules:

```bash
$ cd frontend
$ npm i
```

Create a copy of `.env.example` file and just rename it to `.env`

### CMS

To install CMS dependencies run the next command in Terminal

**without Docker**

```bash
$ cd cms
$ npm i
```

**within Docker**

```bash
$ cd cms
$ docker-compose up
```

## Development

Before staring the development process make sure that you successfully completed [Get started](#markdown-header-get-started) step

Create a copy of `.env.example` file and just rename it to `.env` You should do this operation in `cms` directory as well as in `frontend`

For starting the development process run the following commands in your terminal

---

**without Docker**

Before running the CMS you should make one extra step. Open `.env` file in `cms` directory and update the next line:

```xml
# DATABASE_HOST=postgres # old value
DATABASE_HOST=127.0.0.1 # new value
```

Now we can run the CMS without docker container

```bash
# first terminal tab
$ cd cms
$ npm run develop

# second terminal tab
$ cd frontend
$ npm start
```

‼️Remember that you should have Docker opened even if you go **without Docker** option. Database still needs Docker.

---

**within Docker**

```bash
# first terminal tab
$ cd cms
$ docker-compose up

# second terminal tab
$ cd frontend
$ npm start
```

---

**within remote CMS**

If you want to use data from remote CMS, you should update `.env` file in `frontend` directory


```xml
# GATSBY_CMS_URL=http://localhost:1337 # old value
GATSBY_CMS_URL=https://remote-cms-url.com # new value
```

## AWS S3 Storage Setup

In case we choose Strapi as a CMS we should host media assets somewhere. We use AWS S3 for that.   
You can find the instruction of how to set up S3 bucket [here](https://unikorns.atlassian.net/wiki/spaces/PP/pages/476774471/Set+up+AWS+S3+Bucket)

## Deployment

We have the instructions how to set up each service we use for deployment.

### Netlify setup

The instuction is [here](https://unikorns.atlassian.net/wiki/spaces/PP/pages/343638174/Netlify+Deployment)

### Heroku setup (for Strapi)

The instruction is [here](https://unikorns.atlassian.net/wiki/spaces/PP/pages/343572614/Strapi+CMS+Deployment)

If you notice any misleading information, please contact Dima Miro (dima.miro@unikorns.work)
