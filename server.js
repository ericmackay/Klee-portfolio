const express = require('express')
const argv = require('process').argv
const root = '/Users/HAMMERPANTS/Workspace/KleeSite'

const app = express()
app.set('port', 3108)
app.use(express.static(root))

app.listen(app.get('port'))

console.log('Test server listening on port 3108')
