const bodyParser = require('body-parser');
const express = require('express');
const app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs");
app.set("views",__dirname + "/views");

app.get("",(req,res)=>{
    res.render("bmi");
})

app.post("/", (req, res) => {
  console.log(req.body);
  const weight = Number(req.body.weight);
  const height = Number(req.body.height);
  const bmi = weight / ((height / 100) ** 2);
  res.render("bmiInfo", { bmi: bmi.toFixed(1)});
//   res.send(`Your BMI Result is: ${bmi.toFixed(1)}`);
});


app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});