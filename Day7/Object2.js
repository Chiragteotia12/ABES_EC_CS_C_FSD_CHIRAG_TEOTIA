const student = {
    name: "xyz",
    course: "B.Tech",
    branch: "CS",
    section: "C",
    phoneNo: {
        phoneNo1: "1234567890",
        phoneNo2: "0987654321"
    },
    address: {
        Hno: 121,
        street: "abc street",
        city: "Ghaziabad",
        state: "Uttar Pradesh",
        country: "India",
        pincode: 123456
    }
    
}
const newStudent = Object.assign({}, student);
console.log(newStudent);

newStudent.section = "D";
console.log(newStudent.section);
