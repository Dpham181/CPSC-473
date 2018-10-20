CPSC 473 Assignment #2
Due Date: 11/09
In this homework assignment, you will build a simple web page for users to find students’




Requirements:

1.	To find students, you enter the last name and click the ‘Search’ button.
2.	You will implement JS code to retrieve the students with the given last name in response to the ‘click’ event.
3.	The list of students found in step 2 will be displayed on the ‘Students Found:’ section.
4.	Users can click on a student name from step 3 and the student’s grades will be displayed on ‘Grades for xxx;’ section in a 2-colun table format.


Requirements View Model:

1.	Develop a Model module to manage data regarding students’ grades. Each student should have attributes (at least): first name and last name. Since one student could have more than one grade, you need to implement this one-to-many relationship in your module. The module would expose a Function constructor so you can use to instantiate the model object.
2.	Develop a couple of View modules to be used to dynamically create the student list and detailed grade table.
3.	Develop a Controller module to register the event handlers the ‘click’ event occurring on the ‘Search’ button and any student’s name (in the list).

-> model view using class contructor  
class student {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.fullname = firstname +","+ lastname;
  }


}

// students name records
let students = [
  new student("Danh", "Pham"),
  new student("Henrry", "Do"),
  new student("Thomas", "Ngo"),
  new student("Danny", "Pham"),
  new student("Steven", "Pham")
];
// defind class for course
class course{
  constructor(Course){
    this.Course = Course;
  }
}
// push new course records
let courses = [
  new course("CPSC-323"),
  new course("CPSC-481"),
  new course("CPSC-471")

]
// defind class for gpa
class gpa{
  constructor(gpa){
    this.gpa = gpa;
  }
}
// push new gpa
let gpas = [
  new gpa("3.2"),
  new gpa("2.5"),
  new gpa("4.0")

]



Comment: by using div for js innerHTML  so we need to Refresh the page after searching one records for more cleaning output.
Included: CSS for home Page
Note: Searching box last name first letter needs to be capital.
