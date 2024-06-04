const Appliance = require('../models/appliance')

exports.addAppliance = (req, res) => {
    try {
        const r = req.body;
        console.log(req.body)
        const appliance = new Appliance({
            type: r.type,
            make: r.make,
            model: r.model,
            serial: r.serial
        })
        console.log(appliance)
        appliance.save()
            .then(() => {
                res.status(200).json('Project added successfully') 
            })
            .catch((err) => {
                res.status(500).json('Error adding project: ', err)
            })
    } catch (err) {
        res.status(500).json('Error adding appliance: ', err)
    }
}