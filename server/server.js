const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;
const workoutsApiController = require('./controllers/workoutsApiController');
const dBController = require('./controllers/mongooseControllers');

app.use(express.json());

app.get('/getAll', dBController.getWorkouts, (req, res) => {
  return res.status(200).json(res.locals.allWorkouts);
});

app.delete("/deleteOne", dBController.deleteWorkouts, (req, res) => {
  return res.status(200).json(res.locals.deleted);
});

app.post('/newWorkout', dBController.addMyWorkout, (req, res) => {
  console.log('success in adding working in server');
  return res.status(200).json(res.locals.added);
});
app.post('/:muscle', workoutsApiController.bodyParts, (req, res) => {
  console.log('yooooooooooo');
  return res.status(200).json(res.locals.workoutdata);
});

app.use('*', (req, res) => {
  res.sendStatus(404);
});

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error global occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

mongoose
  .connect(
    'mongodb+srv://kennyyang2015:EoqwT5hAf7Mzi8Qm@cluster0.vrl1svl.mongodb.net/?retryWrites=true&w=majority')
  .then(() => {
    console.log('connected to mgdb');
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  })
  .catch((error) => {
    console.log('here is an error: ', error);
  });
