const express = require('express');
const router = express.Router();
const incomeModel = require('../models/income');

router.get('/allIncome', async (req, res) => {
	try {
		const income = await incomeModel.find();
		res.send(income);
	}
	catch(error) {
		res.status(500).send("Something went wrong!!");
	}
});

router.post('/addIncome', async (req, res) => {
	try {
		const data = req.body;
		const income = await incomeModel.create({
			source: data.source,
			date: data.date,
			amount: data.amount,
		});
		res.send(income);
	}
	catch(error) {
		res.status(500).send("Something went wrong!!");
	}
});

router.delete('/delIncome', async (req, res) => {
	try {
		const id = req.body.id;
		const income = await incomeModel.deleteOne({
			_id: id
		});
		res.send("Delete record of Income");
	}
	catch(error) {
		res.status(500).send("Something went wrong!!");
	}
});

router.put('/updateIncome', async (req, res) => {
	try {
		const data = req.body;
		const income = await incomeModel.updateOne({
			_id: data.id,
			source: data.source,
			date: data.date,
			amount: data.amount,
		});
		res.send(income);
	}
	catch(error) {
		res.status(500).send("Something went wrong!!");
	}
});

module.exports = router;