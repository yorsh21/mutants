const express = require('express')
const mongodb = require('./modules/mongodb')
const isMutant = require('./modules/mutant-v2')
const app = express()

app.use(express.json())

app.get('/', function (req, res) {
    res.send('Send POST request to determine if a person is mutant from their DNA')
})

app.get('/stats', function (req, res) {
	mongodb.getMutants().then((result) => {
		let sumHuman = 0
		let sumMutant = 0

		result.forEach((item) => {
			if (item.isMutant) { 
				sumMutant++ 
			} else {
				sumHuman++ 
			}
		})

		res.json({
			"count_mutant_dna": sumMutant, 
			"count_human_dna": sumHuman, 
			"ratio": (sumMutant/sumHuman).toFixed(1)
		})
	})
})

app.post('/mutant', function (req, res) {
	try {
		let result = isMutant(req.body.dna)

		if(result) {
			mongodb.storeMutant({isMutant: true})
			res.status(200).send('OK')
		} else {
			mongodb.storeMutant({isMutant: false})
			res.status(403).send('Forbidden')
		}

	} catch (error) {
		res.status(400).send('Bad Request')
	}
})

app.use(function(req, res, next) {
    res.status(404).send("Route not found.")
})

app.listen(8080, function () {
    console.log('APP listening on port 8080.')
})