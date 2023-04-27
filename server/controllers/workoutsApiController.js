const fetch = require('node-fetch');
const workoutsApiController = {};
workoutsApiController.bodyParts = (req, res, next) => {
  console.log("this is the bodyparts middleware")
  const headers = {
    'X-Api-Key': 'hMjimYjoY44UR/YZtp4wvQ==3eHZLccZsEchiSoI',
  };
  fetch('https://api.api-ninjas.com/v1/exercises?muscle=' + req.params.muscle, {
    headers,
  })
    .then((data) => data.json())
    .then((workoutdata) => {
      console.log(workoutdata);
      res.locals.workoutdata = workoutdata;
      return next();
    })
    .catch((err) => {
      const errObj = {
        log: 'errworkoutApiController.bodyParts',
        status: 400,
        messaage: 'Check server logs for details',
      };
      return next(errObj);
    });
};

module.exports = workoutsApiController;
