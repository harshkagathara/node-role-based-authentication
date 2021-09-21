const mongoose = require('mongoose')
mongoose.Promise = global.Promise;
const LocalURL = `mongodb://localhost:27017/kagu-node`
const connectionParams = {
	useNewUrlParser: true,
	useCreateIndex: true,
	useUnifiedTopology: true
}
mongoose.connect(LocalURL, connectionParams).then(() => {
	console.log('Successfully connected to the database')
}).catch((err) => {
	console.error(`Error connecting to the database. \n${err}`);
})