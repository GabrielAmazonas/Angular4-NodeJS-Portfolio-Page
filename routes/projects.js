const express   = require('express'), 
mongoose        = require('mongoose'),
Project         = require('../models/project'),
router          = express.Router();
//Find One single Project
router.get("/:id", (req, res) => {
    Project.findById(req.params.id, (err, foundProject) => {
        if(err){
            console.log("Error:")
            console.log(foundProject);
            res.send('localhost:4200')
        } else {
             console.log("Success:");
             console.log(foundProject);
            res.send('localhost:4200/new');
        }
    });
});

//Finds all Projects
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

module.exports = router;