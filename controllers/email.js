const Email = require('../models').Email

module.exports = {
    list(req, res) {
        return Email
            .findAll()
            .then(post => res.status(200).send(post))
            .catch(error => res.status(400).send(error))
    },
    create(req, res) {
        return Email
            .create({
                name: req.body.name,
                subject: req.body.subject,
                message: req.body.message
            })
            .then(email => res.status(201).send(email))
            .catch(error => res.status(400).send(error))
    },
    clear(req, res) {
        return Email
            .destroy( { where: {} })
            .then(() => res.status(204).send())
            .catch(error => res.status(404).send(error))
    }
}
