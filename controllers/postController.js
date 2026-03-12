const posts = require('../data/posts')

function index(req, res) {
    let results = posts;
    if (req.query.tag) {
        results = posts.filter(post => post.tags.includes(req.query.tag))

    }

    res.json(results)
};


function show(req, res) {
    const id = Number(req.params.id)
    if (isNaN(id)) {
        return res.status(400).json({ error: "user error", message: "id non valido" })

    }
    const result = posts.find(post => post.id == id)
    if (!result) {
        return res.status(404).json({ error: "not found", message: " post non trovato" })
    }

    res.json(result)
}

function destroy(req, res) {
    const id = Number(req.params.id)
    if (isNaN(id)) {
        return res.status(400).json({ error: "user error", message: "id non valido" })

    }
    const result = posts.find(post => post.id == id)
    if (!result) {
        return res.status(400).json({ error: "not found", message: " post non trovato" })
    }

    posts.splice(posts.indexOf(result), 1)
    console.log(`post ${id} eliminato`, posts)
    return res.sendStatus(204)
}
const container = {
    index,
    show,
    destroy
}
module.exports = container;