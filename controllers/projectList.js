const Project = require('../models/project')
const ShoppingItem = require('../models/shoppingItem')

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

exports.getSingleProject = (req, res) => {
    const { id } = req.params;
    try {
    Project.findById(id)
    .populate('shoppingList')
        .then((project) => {
            if(project) {
                res.status(200).json(project)
            } else {
                res.status(404).json('project not found')
            }
        })
        .catch((err) => {
            res.status(500).json('Server error: ', err)
        })
    } catch (err) {
        res.status(500).json('Server error: ', err)
    }
}

exports.getShoppingList = (req, res) => {
    const { id } = req.params;
    try {
        ShoppingItem.findById(id)
            .then(item => {
                if (item) {
                    res.status(200).json(item);
                } else {
                    res.status(404).json('Item not found');
                }
            })
            .catch(err => {
                res.status(500).json('Server error fetching item: ' + err);
            });
    } catch (err) {
        res.status(500).json('Server error: ' + err);
    }
}

exports.deleteProject = (req, res) => {
    const { id } = req.params;
    try {
        Project.findById(id)
            .then((project) => {
                console.log(project)
                if(project) {
                    Project.deleteOne({ "_id": project._id })
                        .then(() => {
                            res.status(200).json('Project successfully deleted.')
                        })
                } else {
                    res.status(404).json('Project not found.')
                }
            })
    } catch (err) {
        res.status(500).json('Error deleting task: ', err)
    }
}