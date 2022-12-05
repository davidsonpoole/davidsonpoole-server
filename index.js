const Express = require('express')
const bodyParser = require('body-parser')
const os = require('os')
const path = require('path')
const cors = require('cors')
const postController = require('./controllers').posts

const app = Express();
app.use(bodyParser.json());
app.use(cors({ origin: 'http://localhost:8080' }))
app.use(Express.static(path.join(__dirname, '../../public')))

require('./routes')(app)

app.listen(8000, () => console.log('Listening on port 8000!'))
