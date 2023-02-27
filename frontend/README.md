# FE for aplication PRINT CARDS FROM JIRA for TappyTaps

- bootstrapped with react
- `npm install` for installing the dependencies of this app
- dependencies react, sass, axios
- in package.json is defined "proxy": "http://localhost:5000" (our backend PORT=5000)


In the project directory please start with `npm install` for installing the dependencies of this app.

You can continue with `npm start`:
Runs the app in the development mode.\
Open [http://localhost:8080](http://localhost:3000) to view it in your browser.

`npm run build`
Builds the app for production to the `build` folder.\

This app uses **sass**.
There is no style module, all styles are global.

It's necessary use this app with backend because of the problem with CORS policy, when you want to start app from the browser.
API url is defined in .env files.