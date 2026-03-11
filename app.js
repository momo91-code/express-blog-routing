console.log("hola");

const express = require('express')
const postsRouter = require('./routers/posts')

const app = express()
const port = 3000

app.use(express.json())
app.use(express.static('public'));

app.use('/posts', postsRouter)

app.get('/', (req, res) => {
    console.log("chiamata ricevuta");
    res.send("hello")
})


app.listen(port, () => {
    console.log(`example app listening on port ${port}`)
});