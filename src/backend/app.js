const express = require('express')
const app = express()
const port = 3001
const getGallery = require('./getGalleryBk.js')

app.get('/rest/movies/:id?', (req, res) => {
// const gallery = getGallery();
// const oneMovie = gallery.find(movie => movie.id === req.params.id)
// res.send(oneMovie);
    res.send(getGallery(req.params.id))
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`))