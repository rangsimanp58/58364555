const express = require('express')
const app = express()
const port = 8000;

//app.use(express.static('public'))
app.use('/static', express.static(path.join(__dirname, 'css')))
app.get('/',(req, res) => res.sendFile(path.join(__dirname, 'resume.html')))

app.listen(port, () => console.log('app listening on port'+port))



