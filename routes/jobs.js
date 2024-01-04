const express = require("express")
const router = express.Router();
const { Jobs, validateJobs } = require("../models/jobs")

router.get("/", async (req,res)=>{
    const jobs = await Jobs.find();
    res.send(jobs);
})

router.get("/:id", async (req,res)=>{
    const findJobs = await Jobs.findById(req.params.id);
    if(!findJobs){
        return res.status(404).send("Aradğınız iş yok");
    }
    res.send(findJobs);
})

router.post("/", async (req,res)=>{
    const { error } = validateJobs(req.body);
    if(error){
        return res.status(404).send(error.details[0].message);
    }
    const newJobs = new Jobs({
        name: req.body.name
    })
    const newJob = await newJobs.save();
    res.send(newJob);
})

router.put("/:id", async (req,res)=>{
    const jobs = await Jobs.findById(req.params.id)
    if(!jobs){
        return res.status(404).send("Wrong a id");
    }

    const { error } = validateJobs(req.body);
    if(error){
        return res.status(404).send(error.details[0].message)
    }
    jobs.name = req.body.name;
    const updatedJobs = await jobs.save();
    res.send(updatedJobs);
})

router.delete("/:id", async (req,res)=>{
    const jobs = await Jobs.findByIdAndDelete(req.params.id);
    if(!jobs){
        return res.status(404).send(error.details[0].message);
    }
})


module.exports = router