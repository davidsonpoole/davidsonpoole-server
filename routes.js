const path = require('path')
const blogController = require('./controllers').blogs
const emailController = require('./controllers').emails

module.exports = function routes(app) {
    app.post('/api/post', blogController.create)
    app.get('/api/blogs', blogController.list)
    app.post('/api/removeAll', blogController.removeAll)
    app.post('/api/remove/:postId', blogController.remove)
    app.get('/api/messages', emailController.list)
    app.post('/api/send', emailController.create)
    app.get('/api/clear', emailController.clear)
}
