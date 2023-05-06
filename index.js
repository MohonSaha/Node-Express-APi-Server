const express = require('express')
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;


//middleware:
app.use(cors());
app.use(express.json());





const users =[
    {id:01, name: "milon mia", email: "milon@gmail.com"},
    {id:02, name: "Mohon Saha", email: "mohon@gmail.com"},
    {id:03, name: "Hasib Mia", email: "hasib@gmail.com"},
    {id:04, name: "Rana vai", email: "rana@gmail.com"},
]


app.get('/', (req, res) => {
  res.send('User management server is running')
})



app.get('/users', (req, res)=>{
    res.send(users)
})

app.post('/users', (req, res)=>{
    console.log('post api hitting');
    console.log(req.body);
    const newUser = req.body;
    newUser.id = users.length + 1;
    users.push(newUser)
    res.send(newUser)
})


app.listen(port, () => {
  console.log(`User management server is running on port ${port}`)
})