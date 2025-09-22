class Student{
    constructor(rollno,name,course,branch){
        this.rollno = rollno;
        this.name = name;
        this.course = course;
        this.branch = branch;
    }
}
const student1 = new Student(1,"xyz","B.Tech","CS");
console.log(student1);
const student2 = new Student(2, "abc", "BBA", "Marketing");
console.log(student2);
