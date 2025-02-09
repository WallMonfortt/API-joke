import express from 'express'
import axios from 'axios'

let PORT = 3000;
let app = express();

const API_URL = " https://v2.jokeapi.dev"

let category = 'Any'

app.use(express.static('public'));


app.get('/', (req, res) => {

    axios.get(`${API_URL}/joke/${category}?type=single`).then(
        function (response) {
            console.log(response.data)
            res.render('index.ejs', {
                category: JSON.stringify(response.data.category),
                joke: response.data.joke,
                flags: getKeysWithTrueValues(response.data.flags)
            } )
        }
    ).catch( function error(e) {
        console.log(e)
        res.render('index.ejs', {
            content: JSON.stringify(error)
        })
    })
})

function getKeysWithTrueValues(obj) {
    console.log(obj)
    let keys = [];
    
    for (const key in obj) {
      if (obj.hasOwnProperty(key) && obj[key] === true) {
        keys.push(key);
      }
    }
    return (keys.length > 0) ? keys : null ;
  }



app.listen(PORT, () =>{
    console.log(`Appliation listening on port: ${PORT}`);
})