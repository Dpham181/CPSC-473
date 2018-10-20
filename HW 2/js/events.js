


// class student for first name and last name
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
// assign database with student name and course belong with gpa

let students_records = [
{
    fname: students[0].firstname,
    lname: students[0].lastname,
    course: courses[0].Course,
    gpa: gpas[1].gpa

},
{
    fname: students[0].firstname,
    lname: students[0].lastname,
    course: courses[2].Course,
    gpa: gpas[1].gpa

},
{
    fname: students[1].firstname,
    lname: students[1].lastname,
    course: courses[2].Course,
    gpa: gpas[2].gpa

},
{
    fname: students[2].firstname,
    lname: students[2].lastname,
    course: courses[2].Course,
    gpa: gpas[2].gpa

},

{
    fname: students[1].firstname,
    lname: students[1].lastname,
    course: courses[1].Course,
    gpa: gpas[1].gpa

},
{
    fname: students[4].firstname,
    lname: students[4].lastname,
    course: courses[2].Course,
    gpa: gpas[2].gpa

},

{
    fname: students[3].firstname,
    lname: students[3].lastname,
    course: courses[1].Course,
    gpa: gpas[2].gpa

},
{
    fname: students[3].firstname,
    lname: students[3].lastname,
    course: courses[2].Course,
    gpa: gpas[0].gpa

},
{
    fname: students[4].firstname,
    lname: students[4].lastname,
    course: courses[1].Course,
    gpa: gpas[1].gpa

}
];


(function() {

function addFormListener() {
  /// getting id for form that use for get values
		var elm = document.getElementById("form-input");
    // hit submit then get all values
		elm.addEventListener('submit', function(event) {
			event.preventDefault();


// getting values from our input text then push to our array with index 0
      var elm = document.getElementsByTagName("input");
      var lastname = [];
      for (var i = 0; i < elm.length; ++i) {
        // checking type with is undefined for testing method
      if (typeof elm[i].attributes.id !== "undefined") {
        if (elm[i].attributes.id.value == "lastname") {
          lastname.push(elm[i].value);
        }
      }
    }
      console.log(lastname[0]);
      // getting id for table before use to generate records
      var students_table = document.getElementById('student_table');
      var student_firstname = null;
      var found = [];
      for ( var i = 0 ; i < students.length ; i++){

        // searching to our records with the input name from users
        if  (students[i].lastname == lastname[0]){

            console.log( students[i].fullname );
            // push founded students to our found array to minize the search
            found.push(new student (students[i].firstname,students[i].lastname) );

                }

      }
      console.log(found);
      var k = 0;
      // checking if we fould the student last name in our records
      if(found.length < 1 || found == undefined){
        students_table.innerHTML+= '<tr><td>'+ "Empty"+ '</td><tr>';
        alert("(Your name doesnts match with our records)");
        alert("Please Refresh Page Before Searching New Records");

          // if not then empty
      }else {
        for(var i = 0 ; i < found.length ; i++){ // else then generate list of students founded
          students_table.innerHTML+= '<tbody><tr><td>'+ found[i].fullname + '</td><tr></tbody>';
        }
        alert("Please Refresh Page Before Searching New Records");

      }
  students_table.addEventListener('click', function(){myFunction(event)}, false);

  function myFunction()
  {
    var col = window.event.target.cellIndex;
    var row = window.event.target.parentNode.rowIndex;
    console.log('Col index is: ' + col + '\nRow index is: ' + row /2);
    var nRow = row/2;
    var records_table = document.getElementById('records_table');
    var student_name = document.getElementById('student_name');
    student_name.innerHTML+=  "Grades for   " + found[nRow].fullname + "  :" +'<br>';

    for ( var i = 0 ; i < students_records.length ; i++){

      // searching to our records with the input first name from users
      if  (students_records[i].fname == found[nRow].firstname){

          console.log( students_records[i].course );
          console.log( students_records[i].gpa );

          // generate table with inner html method
           records_table.innerHTML+= '<tr><td>' + students_records[i].course + '</td><td>' + students_records[i].gpa + '</td></tr>';

              }
}

  alert("Please Refresh Page Before Searching New Records");
  }


		});
	}
  // cheeck all the funtions if it works at first place
  window.addEventListener('load', function(event) {
  		console.log('The document has been fully loaded.');
        addFormListener();
  	});
  })()
