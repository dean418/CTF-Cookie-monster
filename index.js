const path = require('path');
const hbs = require('express-handlebars');
const bodyParser = require('body-parser');
const express = require('express');

const runPuppeteer = require('./puppeteer');

const app = express();

app.engine('.hbs', hbs({defaultLayout: 'layout', extname: '.hbs'}));
app.set('view engine', '.hbs');

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
	res.render('index');
});

app.post('/', (req, res) => {
	let author = req.body.author;
	let post = req.body.blogPost;
	runPuppeteer(post)
	res.redirect(`post?author=${author}&post=${post}`);
});

app.get('/post', (req, res) => {
	res.render('post');
});

app.listen(process.env.PORT || '3001', ()=> {
	console.log('listening on port 3001');
});