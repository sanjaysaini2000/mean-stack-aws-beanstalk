# Mean Stack - Customer Store App

This Mean Stack application is configured to be deployed on AWS Elastic Beanstalk.

## Prerequisites

- In order to deploy this app all you need is an AWS account and if you don’t have one, you can create a free tier account for free in few simple steps.

- You will need Node.js, which is javascript runtime installed on our machine to build this application.
  So download and install the latest Node.js available from this [link](https://nodejs.org/en/).

- we also need to have MongoDB installed on the machine. You can download and install MongoDB community edition free from this [link](https://www.mongodb.com/download-center/community).

OR

- If you dont want to install MongoDB on your machine then you can use cloud hosted MongoDB service from this [link](https://cloud.mongodb.com/user#/atlas/login). Ypu have to create account and use free tier to host your data.

## Getting Started

Clone or Download the zip file of this repository.

### Setup server

Open the command window in the folder where you have unzip the mean-stack-application repository.

Rename **.env_example** file to **.env** and add following code in the file in case you are using local MongoDB.

`DB_CONNECTION=mongodb://localhost:27017/customerDb`

Otherwise, if you are using cloud based MongoDB service then you the connection string you get from there instead of local one.

Now run following command to install all the package dependencies.

```
npm install
```

### Setup Client application

Now move to client folder.

```
cd client
```

Now run following command to install all the package dependencies for client.

```
npm install
```

### AWS Beanstalk Deployment

Checkout my [article](https://sanjaysaini.tech/deploy-mean-stack-application-on-aws-beanstalk/) on deploying this application on AWS Beanstalk.

## Built With

- [Node.js v10.15.1](https://nodejs.org/en/) - The .Net Core framework used
- [Angular CLI v7.3.1](https://cli.angular.io/) - This project was generated with
- [VS Code](https://code.visualstudio.com/download) - The Code editor used
