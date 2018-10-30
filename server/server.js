const express = require('express');
const app = express();
const path = require('path');

const publicPath =  path.join(__dirname, "..", "public");
app.use(express.static(publicPath));

app.listen(1997, () => {
  console.log("Port is running on 1997");
})
