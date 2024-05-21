# kaelan-app
This is where I'm creating an api for myself to learn new tools.

Commands to run in order to deploy kubernetes setup. Will run on localhost:8080
npm install
npm run docker:build
npm run kube:start

This will create a docker image which builds the ts files into js and is setup to run the files using node
Then kubernetes sets up a mongodb database on your machine and runs the docker image which connects to the database 
and exposes port 8080 with the defined endpoints (routing directory)

I used to be able to run npm run dev and setup the api quickly locally, but the database connection is rejected without the kubernetes setup.
I'm Leaving the command and package because I can configure nodemon to connect to an external database in the future

To rebuild your code and redeploy locally use these commands
npm run docker:build
npm run kube:restart