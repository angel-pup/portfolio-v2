const express = require('express')
const path = require('path')
const livereload = require("livereload");
const connectLiveReload = require("connect-livereload");
const app = express()
const port = 3000
const liveReloadServer = livereload.createServer();
const router = express.Router()

liveReloadServer.server.once("connection", () => {
    setTimeout(() => {
        liveReloadServer.refresh("/");
    }, 100);
});

app.use(connectLiveReload());

// https://localhost:3000/
app.use(express.static(path.join(__dirname, "./src/")));

app.set('view engine', 'pug')
app.set('views', path.join(__dirname, './src/pug'));


app.get('/', (req, res) => {
    res.render('index', {})
})

app.get('/skills', (req, res) => {
    res.render('skills', {})
})

app.listen(port, () => {
    console.log(`Portfolio app listening on port ${port}`)
})
