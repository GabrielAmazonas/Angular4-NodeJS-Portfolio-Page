const express   = require('express'), 
mongoose        = require('mongoose'),
Project         = require('../models/project'),
router          = express.Router();

//SHOW Route
router.get("/:id", (req, res) => {
    Project.findById(req.params.id, (err, foundProject) => {
        if(err){
            console.log(foundProject);
        } else {
            res.send(foundProject);
        }
    });
});

//EDIT Route
router.get("/:id/edit", (req, res) => {
    Project.findById(req.params.id, (err, foundProject) => {
        if(err){
            console.log(foundProject);
        } else {
            res.send(foundProject);
        }
    })
});

//UPDATE Route
router.put("/:id/edit", (req, res) => {
    console.log("FOUND URL");
    console.log(req.body);

      let newProject = {
        title: req.body.title,
        image: req.body.image,
        description: req.body.description
    };

    console.log('---------------');
    console.log(newProject);

    Project.findByIdAndUpdate(req.params.id, newProject, (err, foundProject) => {
         if(err)
        {   
            console.log(err);
            console.log('ruim:');
            res.json({success: false, msg:'Failed to create project'});
        } else
        {
            res.json({success: true, msg:'Project created.'});
        }
    }
)});

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
            res.json({success: true, msg:'Project created.'});
        }

    });

   
});

module.exports = router;