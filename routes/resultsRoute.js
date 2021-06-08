const express = require("express")
const resultsRoute = express.Router()
const ElectionResults = require("../models/ElectionResults.js")

//Get All Results

resultsRoute.get("/", (req, res, next) => {
    ElectionResults.find((err, results) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(results)
    })
})

//Get Results By Year

resultsRoute.get("/:electionYear", (req, res, next) => {
    ElectionResults.find({ electionYear: req.params.electionYear }, (err, results) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(results)
    })
})

//Get Results By State

resultsRoute.get("/:state", (req, res, next) => {
    ElectionResults.find({ state: req.params.state }, (err, results) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(results)
    })
})

module.exports = resultsRoute