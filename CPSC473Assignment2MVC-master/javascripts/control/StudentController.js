var studentController = (function () {

    //initial load of student list
    var loadStudentList = function () {
        studentView.loadStudentList();
    };

    //search for student
    var search = function () {
        studentView.search();
    };

    //student course and gpa
    var showDetail = function (id, name) {
        studentView.showDetail(id, name);
    };


    // Explicitly reveal public pointers to the private functions
    return {
        search: search,
        showDetail: showDetail,
        loadStudentList: loadStudentList
    }
})();