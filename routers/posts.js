const express = require('express')
const router = express.Router();
const postsController = require('../controllers/postController')

router.get('/', postsController.index)

router.get('/:id', postsController.show)


router.post('/', (req, res) => {
    res.send(`You are creating a new post`)
});

// questo codice mostra il nuovo post che hai deciso di creare
/*router.post('/', (req, res) => {
    const newPost = req.body
    posts.push(newPost)
    res.status(201).json(newPost)
})*/

router.put('/:id', (req, res) => {
    res.send(`You requested to update the post with id: ${req.params.id}`)
});

// questo codice mostra update post con determinato id
/*router.put('/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const index = posts.findIndex(p => p.id === id)
    if (index !== -1) {
        posts[index] = { ...req.body, id }  // mantiene l'id originale
        res.json(posts[index])
    } else {
        res.status(404).send("Post non trovato")
    }
})*/

router.patch('/:id', (req, res) => {
    res.send(`You requested to modify the post with id: ${req.params.id}`)
});

// questo codice mostra modifica post con determinato id
/*router.patch('/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const post = posts.find(p => p.id === id)
    if (post) {
        Object.assign(post, req.body)  // aggiorna solo i campi presenti nel body
        res.json(post)
    } else {
        res.status(404).send("Post non trovato")
    }
})*/



router.delete('/:id', postsController.destroy)



module.exports = router;

