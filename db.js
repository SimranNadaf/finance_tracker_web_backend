const mongoose = require("mongoose");

const connectDB = async () => {
	await mongoose.connect("mongodb+srv://user:Simran@finance.qgpa2.mongodb.net");
	//.then(()=>{
	console.log("connected to Database...");
	//}).catch((error)=>{console.log(error);});
}


module.export = connectDB();