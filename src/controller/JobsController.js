const orm = require('../../orm')

index = (req, res) => {

	orm.get().collection('jobs').find({}).toArray((err, result) => {
		res.render("jobs", { jobs: result})
	})
}

create = (req, res) => {

	let job = {
		title: req.body.title
	}
	orm.get().collection('jobs').insertOne(job, (err, result) => {
		if (err) throw err;
		 res.redirect(req.get('referer'));
	})
}

module.exports = {
	index: index,
	create: create
}