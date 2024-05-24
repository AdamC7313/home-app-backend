const Project = require('../models/project')

exports.getProjects = (req, res) => {
    Project.find({})
        .then((projects) => {
            console.log(res)
            res.status(200).json(projects)
        })
}