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
	*	[Create heroku application](#markdown-header-create-heroku-application)
	*	[Add addons to application](#markdown-header-add-addons-to-application)
	*	[AWS S3 Storage Setup](#markdown-header-aws-s3-storage-setup)

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

## Deployment

Before deploying the application make sure that you have credentials to Heroku and AWS accounts and installed Heroku CLI.

### Create heroku application

Navigate to Heroku dashboard and click on **New > Create new app**

![heroku-1](https://user-images.githubusercontent.com/15017363/89571219-9bf3ed00-d827-11ea-8730-969aa538d046.png)


Enter the application name and select the region. (The region depends on client business location)

![heroku-2](https://user-images.githubusercontent.com/15017363/89571221-9d251a00-d827-11ea-8161-e0bf37a2ca08.png)

### Add addons to application

`Heroku Postgres` - Database

`Papertrail` - Server Logs

`Rollbar` - Error monitoring

`Heroku Scheduler` - Scheduled scripts

![heroku-3](https://user-images.githubusercontent.com/15017363/89571226-9dbdb080-d827-11ea-96db-175ed049994b.png)


After the application is created open your terminal window and run the next command:

`$ heroku stack:set container -a <your_application>`

Config `alive script` For making the instance always available on free plan, we should set up alive script in Heroku Scheduler

![scheduler-1](https://user-images.githubusercontent.com/15017363/89571509-16bd0800-d828-11ea-9c33-8f802ae9a464.png)


### AWS S3 Storage Setup

Navigate to AWS dashboard, search for S3 service and click on **Create bucket** button

1. Enter the bucket name
2. On **Set permissions** step choose options from the screenshot below
3. Create the bucket

![aws-1](https://user-images.githubusercontent.com/15017363/89571637-4b30c400-d828-11ea-934d-4719931e0870.png)
![aws-2](https://user-images.githubusercontent.com/15017363/89571736-79160880-d828-11ea-9801-9b83abbf00b8.png)
![aws-3](https://user-images.githubusercontent.com/15017363/89571741-7adfcc00-d828-11ea-8415-3e3de839021c.png)

Create `[IAM](https://aws.amazon.com/iam/)` use for this bucket.

Go to **IAM > Users > Add user**

Enter the **User name** and select **Programmatic access**

![iam-1](https://user-images.githubusercontent.com/15017363/89572087-f477ba00-d828-11ea-8864-bb4e9fba48e6.png)

Go to the next step and select Attach existing policies directly option. Then click on Create policy button

![iam-2](https://user-images.githubusercontent.com/15017363/89572095-f6da1400-d828-11ea-82ca-3b6ddda2012a.png)

In a new window, choose S3 service and mark the following actions:

1. **Read > GetObject**
2. **Read > GetObjectAcl**
3. **Read > GetObjectVersion**
4. **Read > GetObjectVersionAcl**
5. **Write > DeleteObject**
6. **Write > DeleteObjectVersion**
7. **Write > PutObject**
8. **Permissions management > PutObjectAcl**
9. **Permissions management > PutObjectVersionAcl**

![iam-3](https://user-images.githubusercontent.com/15017363/89572097-f772aa80-d828-11ea-8cbb-495a8d7a6a64.png)

In Resources section go to Add ARN and enter S3 bucket name and allow all objects via `*` symbol

![iam-4-1](https://user-images.githubusercontent.com/15017363/89572629-aa430880-d829-11ea-8b77-34f27a6ab3fc.png)
![iam-4](https://user-images.githubusercontent.com/15017363/89572099-f80b4100-d828-11ea-83bb-602cc8ff3c1d.png)

Go to the next step and enter **Policy name**

Return to the previous page and search for created Policy

![iam-5](https://user-images.githubusercontent.com/15017363/89572100-f8a3d780-d828-11ea-997a-d73643ac6e4e.png)

Create a new User and save credentials

![iam-6](https://user-images.githubusercontent.com/15017363/89572103-f8a3d780-d828-11ea-9048-2050752c2342.png)

---

Now let's config heroku environment variables. Open Heroku application and go to Settings. Create the next variables and fill them with values from User credentials and S3 bucket data


```xml
AWS_ACCESS_KEY_ID     # AWS User Access key ID
AWS_SECRET_ACCESS_KEY # AWS User Secret access key
S3_BUCKET             # S3 bucket name
S3_REGION             # S3 bucket region
```

---

Now you can push cms to heroku.


`heroku git:remote -a <your_application>`

And then depending on what branch you're working in you should run:

`git push heroku <current_branch_name>:master`

If you're on master already you can just run:

`git push heroku master`

---

One important thing at the end. After you deployed cms to heroku you should open it and set up **Roles & Permissions** for every content types.

Have fun 🌈