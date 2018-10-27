
const Courses = require("./courses");
const Joi = require("joi");
const express = require("express");
const courses = new Courses();
const app = express();

app.use(express.json());

app.get("/api/courses", (req, res) => {
    res.send(courses.fetch());
});

app.get("/api/courses/:id", (req, res) => {
    const course = courses.fetch(req.params.id);

    if (!course) {
        res.status("404").send("courses with given ID is not exist");
        return;
    }

    res.send(course);
});

app.post("/api/courses", (req, res) => {
    const schema = {
        name : Joi.string().min(3).required()
    };

    const result = Joi.validate(req.body, schema);

    if (result.error) {
        const errMessage = result.error.details.map(err => err.message).join(" | ");

        res.status(400).send(errMessage);
        return;
    }

    const newCourse = courses.insert(req.body.name);
    res.send(newCourse);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));


