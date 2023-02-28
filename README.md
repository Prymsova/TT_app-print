# APP FOR PRINT CARDS FROM JIRA for TappyTaps

- there is backend (nodejs) and frontend (react) part of app
- first of all, please **fill environment variables in .env file** (you can use .env-template file) in "backend" folder (URL, token and authorization of request)
- **to preview the whole app in production mode** enter this command `npm run preview` - it will install all dependencies, build the react frontend for production and start index.js in backend
- `npm run react-build` will install dependencies in frontend part (react, sass, axios) and build the "build" folder for production
- `npm run node-start` will install dependencies in backend part (axios, dotenv, express) and start index.js in backend, or you can go to "backend" and enter the command `npm run start` to start index.js by node in case you have installed dependencies yet 