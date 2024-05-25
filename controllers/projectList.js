const Project = require('../models/project')

exports.getProjects = (req, res) => {
    Project.find({})
        .then((projects) => {
            res.status(200).json(projects)
        })
}

exports.addProject = (req, res) => {
    const r = req.body
    const project = new Project({
        name: r.name,
        startDate: r.startDate,
        endDate: r.endDate,
        notes: r.notes,
        price: r.price
    })
    console.log(project)
    project.save()
        .then((project) => {
            res.status(201).json({message: 'Project created successfully', id: project._id})
        })
        .catch((err) => {
            return next(err)
        })
}