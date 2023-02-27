const express = require('express');
const path = require('path');
const axios = require('axios').default;
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, "../frontend", "build")));

app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

const headers = {
  cookie: `${process.env.REQUEST_TOKEN}`,
  Authorization: `${process.env.REQUEST_AUTH}`
}

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"))
})

app.get("/api", (req, res) => {
  const getSprints = async () => {
    try {
      const response = await axios.request({
        method: 'GET',
        url: `${process.env.JIRA_URL}board/1/sprint/`,
        params: {state: 'active,future'},
        headers: headers
      });
      res.send(response.data);
    } catch (error) {
      console.error(error);
    }
  }
  getSprints();
});

app.get("/api/sprint/:id", (req, res) => {
  const sprintId = req.params.id;
  const getSprint = async (id) => {
    try {
      const response = await axios.request({
        method: 'GET',
        url: `${process.env.JIRA_URL}sprint/${id}/issue`,
        headers: headers
      });
      res.send(response.data);
    } catch (error) {
      console.error(error);
    }
  } 
  getSprint(sprintId);
});

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`)
});