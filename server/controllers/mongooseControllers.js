const Workout = require('../model/model');

const dBController = {};

dBController.getWorkouts = (req, res, next) => {
  console.log('hiiiii');
  Workout.find({})
    .then((results) => {
      console.log('ALL');
      res.locals.allWorkouts = results;
      return next();
    })
    .catch((err) => {
      const errObj = {
        log: 'AN ERROR IN THE dBController.getWorkouts',
        status: 400,
        message: { err: 'An error occurred in dbcontroller.addMyWorkout' },
      };
      return next(errObj);
    });
};

dBController.addMyWorkout = (req, res, next) => {
  const newWorkout = req.body;
  if (!newWorkout.name && !newWorkout.muscle) {
    const errObj = {
      log: 'Bro add a name and the muscle it target!!',
      status: 400,
      message: { err: 'An error occurred' },
    };
    return next(errObj);
  }
  Workout.create({
    name: newWorkout.name,
    muscle: newWorkout.muscle,
    sets: newWorkout.sets,
    reps: newWorkout.reps,
    description: newWorkout.description,
  })
    .then((results) => {
      console.log('added to database');
      res.locals.added = 'successfully added your workout';
      return next();
    })
    .catch((err) => {
      const errObj = {
        log: 'AN ERROR IN THE ADDMYWORKOUT CONTROLLER',
        status: 400,
        message: { err: 'An error occurred in dbcontroller.addMyWorkout' },
      };
      return next(errObj);
    });
};

dBController.deleteWorkouts = (req, res, next) => {
  const name = req.body.name
  Workout.findOneAndDelete({name: name})
  .then((results) => {
    console.log('ALL');
    res.locals.deleted = results;
    return next();
  })
  .catch((err) => {
    const errObj = {
      log: 'AN ERROR IN THE dBController.deleteWorkouts',
      status: 400,
      message: { err: 'An error occurred in dBController.deleteWorkouts' },
    };
    return next(errObj);
  });
}


module.exports = dBController;

