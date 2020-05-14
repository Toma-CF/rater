const router = require('express').Router()

const auth = require('./AuthRouter')
const jobs = require('./JobsRouter')

router.use((req, res, next) => {
  console.log('Job request Time: ', Date.now())
  next()
})

router.use(auth)

router.use((req, res, next) => {
	if (!req.cookies['username'])
		res.redirect("http://localhost:4242/authentification")
	else
		next()
})

router.use(jobs)

router.use((req, res, next) => {
	res.redirect("http://localhost:4242/jobs")
})

module.exports = router
