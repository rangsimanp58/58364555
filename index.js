const express = require('express')
const app = express()
const port = 3000;

app.use(express.static('public'))
app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log('app listening on port'+port))

//app.use('/static', express.static(path.join(__dirname, 'css')))
//app.get('/',(req, res) => res.sendFile(path.join(__dirname, 'resume.htm

