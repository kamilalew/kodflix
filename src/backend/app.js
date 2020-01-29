const express = require('express')
const app = express()
const port = process.env.PORT || 3001
const getGallery = require('./getGalleryBk.js')
const path = require('path');


app.get('/rest/movies/:id?', (req, res) => {
    res.send(getGallery(req.params.id))
});


app.use(express.static(path.join(__dirname, '../../build')));
app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '../../build', 'index.html'));
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))