import express from "express"
const app = express()
const port = 3000
import cors from 'cors'
import bodyParser from 'body-parser'
app.use(cors());
app.use(express.json());
app.get('/', (req, res) => {
    console.log(req.body)
  res.send('Hello World!')
})
app.post('/',(req,res)=>{
    console.log("hii");
    console.log(req.body);
    res.end("form data filled!!")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})