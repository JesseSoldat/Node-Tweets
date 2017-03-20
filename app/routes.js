module.exports = function(app) {
	app.get('/', function(req, res) {
		res.send('Home Page');
	});

	app.get('/top', function(req, res) {
		res.send('Top Page');
	});

	app.get('/results', function(req, res) {
		res.send('Results Page');
	});

	app.get('/api/results', function(req, res) {
		res.json({messager: 'API Page'});
	});
};