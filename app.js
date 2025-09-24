const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.get('/', (req, res) => res.send('Hello from Node.js on EKS!'));
app.listen(port, () => console.log(`Server running on port ${port}`));
