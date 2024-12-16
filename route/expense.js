const expense = require('express');
const router = expense.Router();
const expenseModel = require('../models/expense');


router.get("/allExp",
	async (req, res) => {
		try{
			const allExp = await expenseModel.find();
			res.send({allExp});
		}
		catch(error) {
			console.log("Error is", error);
			res.status(500).send({error});
		}
	}
)

router.post("/addExp", async (req, res) => {
	try {
		const data = req.body;
		console.log(data.title);
		console.log(data.date);
		console.log(data.amount);
		const exp = await expenseModel.create({
			//id: "abcd123",
			title: data.title,
			date: data.date,
			amount: data.amount,
		});

		res.send({exp});
	}
	catch(error) {
		console.log("error: ", error);
		res.status(500).send("something wrong");
	}

});

router.delete("/delExp", async (req, res) => {
	try{
		const id = req.body.id;
		const exp  = await expenseModel.deleteOne({_id: id});
		res.send("deleted Expense");
	}
	catch(error) {
		res.status(500).send("Something went wrong!!");
	}
});

router.put("/updateExp", async (req, res) => {
	try {
	const data = req.body;
	const exp = await expenseModel.updateOne({_id:data.id},{title:data.title,date:data.date,amount:data.amount});
	res.send({exp});
	}
	catch(error) {
		res.status(500).send("Something went wrong!!");
	}
});

module.exports = router;