const course = {
    coursename: "DSA",
    price: "10$",
    courseInstructor: "Ashutosh"
}

// Extract value form object 
// M1
console.log(course.courseInstructor);
// M2
const {courseInstructor, price: p} = course
console.log(courseInstructor);
console.log(p);