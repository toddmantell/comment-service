# project-service

A simple Express microservice to serve the definitely-not-reddit graphQL Server

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.
### Prerequisites

What you will need installed to run this project

```
NodeJS 8+
An editor (I recommend VSCode)
```

### Installing and Running

Pull down the master branch from this github repo and run the following command:

```
npm i
```

Verify that the npm packages were installed and you can run the service by opening a command prompt (the best way to do this is in the VSCode Integrated Terminal. Go to View --> Integrated Terminal) and run the following command

```
nps //this project uses the nps project for running/building/testing
```

If the project is running properly, you should see something like below:

```
nps is executing `default` : nodemon src/server
[nodemon] 1.11.0
[nodemon] to restart at any time, enter `rs`
[nodemon] watching: *.*
[nodemon] starting `node src/server server.js`
listening on port: 4000
```