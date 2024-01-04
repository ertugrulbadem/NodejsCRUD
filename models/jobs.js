const Joi = require("joi");
const mongoose = require("mongoose");

const jobsSchema = mongoose.Schema({
    name: String,
    date: {
        type: Date,
        default: Date.now
    }
})

function validateJobs(jobs){
    const schema = new Joi.object({
        name: Joi.string().min(3).max(40).required()
    })
    return schema.validate(jobs)
}

const Jobs = mongoose.model("Jobs", jobsSchema);

module.exports = { Jobs, validateJobs }