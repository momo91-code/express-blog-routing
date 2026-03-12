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

function store(req, res) {

    const newPost = {
        id: posts[posts.length - 1].id + 1,
        title: req.body.title,
        content: req.body.content,
        image: req.body.image,
        tags: req.body.tags,
    }
    posts.push(newPost)
    return res.status(201).json(newPost)
};

function update(req, res) {
    const id = Number(req.params.id)
    if (isNaN(id)) {
        return res.status(400).json({ error: "user error", message: "id non valido" })

    }
    const result = posts.find(post => post.id == id)
    if (!result) {
        return res.status(404).json({ error: "not found", message: " post non trovato" })
    }

    result.title = req.body.title ?? "";
    result.content = req.body.content ?? "";
    result.image = req.body.image ?? "";
    result.tags = req.body.tags ?? [];

    return res.json(result);
};

function modify(req, res) {
    const id = Number(req.params.id)
    if (isNaN(id)) {
        return res.status(400).json({ error: "user error", message: "id non valido" })

    }
    const result = posts.find(post => post.id == id)
    if (!result) {
        return res.status(404).json({ error: "not found", message: " post non trovato" })
    }


    const allowedProperties = ["title", "content", "image", "tags"]
    for (const propertyName of allowedProperties) {
        if (req.body[propertyName] !== undefined) {
            result[propertyName] = req.body[propertyName]
        }
    }
    return res.json(result)

};


const container = {
    index,
    show,
    destroy,
    store,
    update,
    modify
}
module.exports = container;