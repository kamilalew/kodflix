const express = require('express')
const app = express()
const port = 3001
const getGallery = require('./getGallery')

app.get('/rest/shows', (req, res) => {
const gallery = getGallery();
res.send(gallery);
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`))