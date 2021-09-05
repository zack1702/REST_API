const express = require('express')
const app = express()

const PeopleController=require('./controller/people-controller')

app.use(express.json()),
app.use(express.urlencoded({extended:true})),


app.get('/', (req,res)=>{
    res.end('Homepage')
})

app.get('/peoples', PeopleController. getAllPeoplelist)
app.get('/people/:id',PeopleController.findPeople)
app.post('/newPeople',PeopleController.newPeople)
app.delete('/people/:id', PeopleController.deletePeople)
app.put('/people/:id',PeopleController.updatePeople)

app.listen(3001, ()=> {
    console.log('Connected to http://localhost:3001')
})