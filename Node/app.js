// run `node index.js` in the terminal

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { json } = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.post('/list', (req, res) => {
const result=[]
const entry = req.body;

entry.forEach(element => {
  if(result.length == 0 || !result.find(entry=>entry.id==element.id))
  {
    var TempArr=[]
    TempArr.push(element.type)
    result.push({"id":element.id,"type":TempArr})
  }
  else
  {
      for(let i=0;i<result.length;i++)
      {
        if(result[i].id==element.id && !result[i].type.includes(element.type))
        {
          result[i].type.push(element.type)
        }
      }
      
  }
});
result.sort((a,b) => a.id - b.id); 
console.log(result);
res.send(result)
});
app.listen(port, () => console.log('App is listening on port 3000'));