const orm = require('../../orm')

authentification_view = (req, res) => {
	res.render('authentification')
}

authentification = (req, res) => {
	let user = {
		username: req.body.username,
		password: req.body.password,
	}
	orm.get().collection('user').findOne(user, (err, result) => {
		if (err) {
			res.send("Login incorrect")
		}
	})
	res.cookie('username', user.username , { maxAge: 900000, httpOnly: true });
	res.redirect('http://localhost:4242/jobs')
}

registration_view = (req, res) => {
	res.render('registration')
}

registration = (req, res) => {
	let user = {
		username: req.body.username,
		password: req.body.password,
	}
	orm.get().collection('user').insertOne(user, (err, res) => {
		 if (err) throw err;
		 console.log("User " + user.username+ " is in the database")
	})
	res.render('registration')
}


module.exports = {
	authentification: authentification,
	authentification_view: authentification_view,
	registration: registration,
	registration_view: registration_view
}