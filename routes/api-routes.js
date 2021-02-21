const Workout = require("../models/workout");

module.exports = function(app) {

    app.get("/api/workouts", async (req, res) => {
        try {
            const data = await Workout.find({});
            res.json(data);
        } catch (err) {
            console.log(err);
        }
    });

    app.post("/api/workouts", async (req, res) => {
        try {
            const data = await Workout.create(req.body);
            res.json(data);
        } catch (err) {
            console.log(err);
        }
    });

    app.put("/api/workouts/:id", async (req, res) => {
        try {
            const data = await Workout.updateOne(
                {
                    _id: req.params.id
                }, 
                { 
                    $push: {exercises: req.body} 
                });
        } catch (err) {
            console.log(err);
        }
    });

    app.get("/api/workouts/range", async (req, res) => {
        try {
            const data = await Workout.find({});
            res.json(data);
        } catch (err) {
            console.log(err);
        }
    });

}