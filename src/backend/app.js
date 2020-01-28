const express = require('express')
const app = express()
const port = 3001
const getGallery = require('./getGalleryBk.js')

app.get('/rest/movies/:id?', (req, res) => {
    res.send(getGallery(req.params.id))
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`))