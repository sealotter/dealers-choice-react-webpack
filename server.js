const express = require('express')
const app = express()
const {db, syncAndSeed, models: {Brewery,Brew}} = require('./db')
const path =require('path')

app.use('/dist', express.static(path.join(__dirname, 'dist')))
app.use('/public', express.static(path.join(__dirname,'public')))
app.get('/',(req,res,next) => res.sendFile(path.join(__dirname, 'index.html')))



app.get('/api/breweries', async(req, res, next) => {
    try{
        res.send(await Brewery.findAll())

    }catch(ex){
        next(ex)
    }
})

app.post('/api/breweries', async(req, res, next) =>{
    try{
        const brewery = await Brewery.create(req.body)
        res.status(201).send(brewery)

    }catch(ex) {
        next(ex)
    }
})


app.get('/api/breweries/:id', async(req, res, next) => {
    try{

    }catch(ex){
        next(ex)
    }
})

const init = async() => {
    try{
        await syncAndSeed()
        const port = process.env.PORT || 1994
        app.listen(port,() => console.log(`listening on port ${port}`))

    }catch(ex){
        console.log(ex)
    }
}

init()