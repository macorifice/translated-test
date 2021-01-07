const express = require('express');

const router = express.Router();
const projectController = require('./controllers/projectController');
const jobController = require('./controllers/jobController');

router.get('/project', projectController.getProjects);

router.get('/project/:id', projectController.getProject);

router.post('/project', projectController.addProject);

router.put('/project', projectController.updProject);

router.delete('/project', projectController.delProject);

router.get('/job', jobController.getJobs);

router.get('/job/:id', jobController.getJob);

router.post('/job', jobController.addJob);

router.put('/job/:id', jobController.updJob);

router.delete('/job', jobController.delJob);

router.post('/filterJob', jobController.filterJob);

router.post('/orderJob', jobController.orderJob);

module.exports = router;
