const express   = require('express'),
app             = express(),
methodOverride  = require('method-override'),
bodyParser      = require('body-parser'),
path            = require('path'),
cors            = require('cors'),
passport        = require('passport'),
config          = require('./config/database'),
mongoose        = require('mongoose');

mongoose.connect(config.database);


//On database connection
mongoose.connection.on('connected', () => {
    console.log('Connected to database: ' + config.database);
});

//On database connection error
mongoose.connection.on('error', (error) => {
    console.log('Failed to connect to database' + error);
});

const projects = require('./routes/projects')

app.use(cors());

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));

app.use(methodOverride("_method"));

app.use('/projects', projects);


//TODO: Needs a /projects/new route on the front-end that redirects here:
//RESTful route: Create. Creates a new project them redirects to the Index route.

//Invalid API Endpoints:
app.get("/", (req, res) => {
    res.send("Invalid endpoint");
})


app.listen(8080, () =>  {
    console.log('Server conected on port 8080');
});


