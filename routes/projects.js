const express   = require('express'), 
mongoose        = require('mongoose'),
Project         = require('../models/project'),
router          = express.Router();

//Finds all Projects
//adding comments to git 
router.get("", (req, res) => {
    Project.find({}, (err, projects) => {
        if(err)
        {
            console.log(err);
        }
        else
        {
            res.send(projects);
        }
    });
});

//new form action
router.post("/new", (req, res) => {

    let newProject = new Project({
        title: req.body.title,
        image: req.body.image,
        description: req.body.description
    });

    Project.addProject(newProject, (err, newProject) => {
        if(err)
        {
            console.log(newProject);
            res.json({success: false, msg:'Failed to create project'});
        } else
        {
            res.json({success: true, msg:'Project created.'})
        }

    });

   
});

//Create project
module.exports = router;