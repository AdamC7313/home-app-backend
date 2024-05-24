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