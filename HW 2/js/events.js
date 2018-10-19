


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
    name: students[0].firstname,
    course: courses[0].Course,
    gpa: gpas[1].gpa

},
{
    name: students[1].firstname,
    course: courses[2].Course,
    gpa: gpas[2].gpa

},
{
    name: students[2].firstname,
    course: courses[2].Course,
    gpa: gpas[2].gpa

},

{
    name: students[1].firstname,
    course: courses[1].Course,
    gpa: gpas[1].gpa

},
{
    name: students[0].firstname,
    course: courses[1].Course,
    gpa: gpas[2].gpa

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
      for ( var i = 0 ; i < students.length ; i++){

        // searching to our records with the input name from users
        if  (students[i].lastname == lastname[0]){

            console.log( students[i].fullname );
            // generate table with inner html method
           students_table.innerHTML+= '<tr><td><button id="button" value= "'  +students[i].firstname+ '">'+ students[i].fullname + ' </button></td><td>';

                }


      }
      students_table.addEventListener('click', function(event) {
        event.preventDefault();

        var elm = document.getElementById('button');
        var firstname = elm.value;
        console.log(firstname);
        var records_table = document.getElementById('records_table');

          for ( var i = 0 ; i < students_records.length ; i++){

            // searching to our records with the input name from users
            if  (students_records[i].name == firstname){

                console.log( students_records[i].course );
                console.log( students_records[i].gpa );

                // generate table with inner html method
    	           records_table.innerHTML+= '<tr><td>' + students_records[i].course + '</td><td>' + students_records[i].gpa + '</td></tr>';

                    }


          }
});

// looping to records to see with there any name that matches
/*
    var items_table = document.getElementById('records_table');

      for ( var i = 0 ; i < students_records.length ; i++){

        // searching to our records with the input name from users
        if  (students_records[i].name == lastname[0]){

            console.log( students_records[i].course );
            console.log( students_records[i].gpa );

            // generate table with inner html method
	           items_table.innerHTML+= '<tr><td>' + students_records[i].course + '</td><td>' + students_records[i].gpa + '</td></tr>';

                }


      }
*/

		});
	}
  // cheeck all the funtions if it works at first place
  window.addEventListener('load', function(event) {
  		console.log('The document has been fully loaded.');
        addFormListener();
  	});
  })()
