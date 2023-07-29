const express = require('express');
const path = require('path');
const moveRobot=require("./robot-move")
const app = express();
const port = 3000; // You can change this to any port number you prefer
console.log(moveRobot);
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));


// Route to serve the HTML form
app.get('/', (req, res) => {
const filePath = path.join(__dirname,'componet','index.html');

res.sendFile(filePath);
});

// Route to process the form submission
app.post('/process', (req, res) => {
  const { size, position, instructions } = req.body;
  // Here, you can process the form data as needed, e.g., run robot movement logic
  // For simplicity, we'll just send back a response with the received data

  const response = {
    'Size': size.replaceAll(" ",""),
    'Position': position.replaceAll(" ",""), 
    'Instructions': instructions.replaceAll(" ","")
  };
  const pos=response.Position.split("");


  const ans=moveRobot(pos[0],pos[1],pos[2],response.Instructions)
  res.send(`<pre>${ans.toString().replaceAll(","," ")}</pre>`);
});

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
