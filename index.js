import express from 'express'
import axios from 'axios'

let PORT = 3000;
let app = express()

const API_URL = " https://v2.jokeapi.dev/"

app.use(express.static('public'))



app.listen(PORT, () =>{
    console.log(`Appliation listening on port: ${PORT}`)
})