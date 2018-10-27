
class Courses {
    constructor() {
        this.data = [{
            id: 1,
            name: "math"
        },{
            id: 2,
            name: "programing"
        }];

        this.fetch = this.fetch.bind(this);
        this.insert = this.insert.bind(this);
    }

    fetch(id) {
        if (id !== undefined)
            return this.data.find(c => c.id.toString() === id.toString());

        return this.data;
    }

    insert(courseName) {
        const newCourse = {
            id: this.data.length + 1,
            name: courseName
        };

        this.data.push(newCourse);

        return newCourse;
    }
}

module.exports = Courses;
