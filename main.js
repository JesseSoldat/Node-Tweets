require('dotenv').config();

var app = require('./app/server');

app.listen(3000, () => {
	console.log('Server is running at port 3000');
});