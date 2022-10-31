const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000;
const { MongoClient, ServerApiVersion } = require('mongodb');

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
// uk0t8P6iUJJkseCh


const uri = "mongodb+srv://dbuser1:uk0t8P6iUJJkseCh@cluster0.y3a2z0u.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

app.get('/users', (req, res) =>{
    if(req.query.name){
       const search = req.query.name
       const filtered = users.filter(usr => usr.name.toLowerCase().indexOf(search) >= 0)
       res.send(filtered) 
    }
    else{

        res.send(users)
    }
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