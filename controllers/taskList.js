const Task = require('../models/task');

exports.addTask = (req, res) => {
    const task = new Task({
        name: req.body.name,
        due: req.body.due,
        reccuring: req.body.reccuring,
        reccuringInterval: req.body.reccuringInterval || 0,
        reccuringUnit: req.body.reccuringUnit || '',
        reccuringEndDate: req.body.reccuringEndDate || '',
        reccuringCount: req.body.reccuringCount || 0,
        reccuringDays: req.body.reccuringDays || [],
        reccuringMonths: req.body.reccuringMonths || [],
        reccuringYears: req.body.reccuringYears || 0,
        reccuringWeeks: req.body.reccuringWeeks || 0
    });

    task.save()
        .then(() => {
            res.json({ message: 'Task added successfully' });
        })
        .catch(err => {
            return next(err);
        });
}

exports.getTasks = (req, res) => {
    Task.find({})
        .then(tasks => {
            res.json(tasks);
        })
        .catch(err => {
            return next(err);
        });
};

exports.deleteTask = (req, res) => {
    const { id } = req.params;

    try {
    Task.findById(id)
        .then((task) => {
            if(task) {
                Task.deleteOne({ "_id": task._id })
                    .then(() => res.status(200).json('task successfully deleted'))
            } else {
                res.status(404).json('task not found')
            }
        })
    } catch (error) {
        res.status('500').json('Server Error: ', error)
    }
}