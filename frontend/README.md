# FE for aplication PRINT CARDS FROM JIRA for TappyTaps

- bootstrapped with react
- `npm install` for installing the dependencies of this app
- dependencies react, sass, axios
- in package.json is defined "proxy": "http://localhost:5000" (our backend api is PORT=5000)
- `npm run build` builds the app for production to the "build" folder (or you can type `npm run build` in the project directory and installing the dependencies and building the app for production will be complete)
- this app uses sass, but there are no style modules - all styles are global
- it's necessary use this app with backend because of the problem with CORS policy, when you want to start app from the browser