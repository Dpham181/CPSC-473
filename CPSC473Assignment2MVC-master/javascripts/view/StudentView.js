var studentView = (function () {

    //initial load of student list
    var loadStudentList = function () {
        //reset detail view
        document.getElementById("courseGrdes").innerHTML = "";
        document.getElementById("courseDetail").style.display = 'none';

        var studentList = studentModel.getStudentList();

        var theTemplateScript = document.getElementById('student-template').innerHTML; 
        var theTemplate = Handlebars.compile(theTemplateScript); 
        var theCompiledHtml = theTemplate(studentList);
        document.getElementById('maincontent').innerHTML = theCompiledHtml;
        document.getElementById("searchInput").innerText = "";
    };

    //search for student
    var search = function () {
        //reset detail view
        document.getElementById("courseGrdes").innerHTML = "";
        var input, filter, table, tr, td, i;
        input = document.getElementById("searchInput");
        if (input.value == "") {
            alert("Please enter student name");
            input.focus();
            return;
        }
        filter = input.value.toUpperCase();
        table = document.getElementById("studentTable");
        tr = table.getElementsByTagName("tr");
        for (i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td")[0];
            if (td) {
                if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
                    tr[i].style.display = "";
                } else {
                    tr[i].style.display = "none";
                }
            }
        }
    };

    //student course and gpa
    var showDetail = function (id, name) {
        var student = document.getElementById("courseGrdes");
        student.innerHTML = ""; //initialize
        var studentDetail = studentModel.getStudentById(id).grades;
        document.getElementById('courseTitle').innerHTML = "Grades for: " + name;
        var theTemplateScript = document.getElementById('course-template').innerHTML;
        var theTemplate = Handlebars.compile(theTemplateScript);
        var theCompiledHtml = theTemplate(studentDetail);
        document.getElementById('courseGrdes').innerHTML = theCompiledHtml;
        document.getElementById("courseDetail").style.display = 'block';
    };

    // Explicitly reveal public pointers to the private functions
    return {
        search: search,
        showDetail: showDetail,
        loadStudentList: loadStudentList
    }
})();