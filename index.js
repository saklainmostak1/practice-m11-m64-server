const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000;

app.use(cors())
app.use(express.json())


app.get('/', (req, res) =>{
    res.send('api is running')
})


const users = [
    {id: 1, name: 'sabana', email: 'sabana@gmail.com' },
    {id: 2, name: 'sabnur', email: 'sabnur@gmail.com' },
    {id: 3, name: 'sabila', email: 'sabila@gmail.com' },
];

app.get('/users', (req, res) =>{
    res.send(users)
} )
app.post('/users', (req, res) =>{
    const user = req.body
    user.id = users.length + 1
    users.push(user)
    console.log(user)
    res.send(user)
})

app.listen(port , (req, res) =>{
    console.log('api running on ', port)
})