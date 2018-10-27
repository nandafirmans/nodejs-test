
const Courses = require("./courses");
const courses = new Courses();

const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.get("/api/courses", (req, res) => {
    res.send(courses.fetch());
});

app.get("/api/courses/:id", (req, res) => {
    const course = courses.fetch(req.params.id);

    if (!course)
        res.status("404").send("courses with given ID is not exist");

    res.send(course);
});

app.post("/api/courses", (req, res) => {
    const newCourse = courses.insert(req.body.name);

    res.send(newCourse);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
