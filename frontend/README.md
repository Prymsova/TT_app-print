# FE for aplication PRINT CARDS FROM JIRA for TappyTaps

- bootstrapped with react
- `npm install` for installing the dependencies of this app
- dependencies: react, sass, axios
- in package.json is defined "proxy": "http://localhost:5000" (our backend api is PORT=5000) - [Proxying API Requests in Development](https://create-react-app.dev/docs/proxying-api-requests-in-development/)
- `npm run build` builds the app for production to the "build" folder
- this app uses **sass**, but there are **no style modules** - all styles are global
- it's necessary use this app with backend because of the problem with CORS policy, in case you would like to start this app from the browser direct to jira api