# kaelan-app
## This is where I'm creating an api for myself to learn new tools.

Commands to run in order to deploy kubernetes setup. This will expose http://localhost:8080.
```
npm install
npm run docker:build
npm run kube:start
```

This first installs the node dependencies specified in the package.json.
Then it will create a docker image which builds the ts files into js in a dist folder in the image and gets the image ready to run.
Then kubernetes sets up a mongodb database on your machine and runs the docker image which connects to that database.
Kubernetes then exposes port 8080 with the defined endpoints (routing directory)

I used to be able to run `npm run dev` and setup the api quickly locally, but the database connection is rejected without the kubernetes setup.
I'm Leaving the command and library because I can configure nodemon to connect to an external database in the future

To rebuild your code and redeploy locally use these commands
```
npm run docker:build
npm run kube:restart
```