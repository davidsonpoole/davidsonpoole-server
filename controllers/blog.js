const Blog = require('../models').Blog

module.exports = {
    create(req, res) {
        return Blog
            .create({
                title: req.body.title,
                text: req.body.text
            })
            .then(post => res.status(201).send(post))
            .catch(error => res.status(400).send(error))
    },

    list(req, res) {
        return Blog
            .findAll()
            .then(post => res.status(200).send(post))
            .catch(error => res.status(400).send(error))
    },

    removeAll(req, res) {
        return Blog
            .destroy({ where: {} })
            .then(() => res.status(204).send())
            .catch(error => res.status(404).send(error))
    },

    remove(req, res) {
        return Blog
            .findById(req.params.postId)
            .then(post => {
                if (!post) {
                    res.status(404).send({
                        message: 'Post not found'
                    })
                }
                return post
                    .destroy()
                    .then(res.status(204).send())
                    .catch(error => {
                        res.status(400).send(error)
                    })
            })
    }
}
