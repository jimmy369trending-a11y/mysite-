const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(__dirname));
app.use('/pages', express.static(path.join(__dirname, 'pages')));

app.get('/api/chatbot', (req,res)=>{
  res.json({reply:"API not integrated yet"});
});

app.listen(port, ()=>{
  console.log(`Server running at http://localhost:${port}`);
});
