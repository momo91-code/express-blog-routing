console.log("hola");

const express = require('express')
const postsRouter = require('./routers/posts');
const errorsHandler = require('./middlewares/errorsHandler');
const notFound = require('./middlewares/notFound');

const app = express()
const port = 3000

// route di test per generare errore
/*app.get('/test-error', (req, res, next) => {
    const err = new Error("Questo è un errore di prova!")
    next(err)
})*/


app.use(express.json())
app.use(express.static('public'));
app.use('/posts', postsRouter)

app.get('/', (req, res) => {
    console.log("chiamata ricevuta");
    res.send("hello")
})

app.use(notFound)
app.use(errorsHandler)

app.listen(port, () => {
    console.log(`example app listening on port ${port}`)
});