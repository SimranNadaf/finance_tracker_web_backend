const express = require('express');
const db = require('./db.js');

db;

const app = express();
const port = 3000;
app.use(express.json());

app.get('/',(req, res) => {
	res.send('Finance Tracker Backend System...');
});

app.use('/expense', require('./route/expense.js'));
app.use('/income', require('./route/income.js'));

app.listen(port, () => {
	console.log(`Finance Tracker backend running on port : ${port}`);
});