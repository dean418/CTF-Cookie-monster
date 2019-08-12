const express = require('express');
const app = express();

app.get('/', (req, res) => {
	console.log(req.query.flag);
});

app.listen(8080);