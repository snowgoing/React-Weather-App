const express = require('express');

const port = process.env.PORT || 3000;
var app = express();

app.use(express.static('public'))

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
});
