var studentModel = (function () {

    //list of object array of students (local)
    var studentList = [
        { id: 1, firstName: 'Jackie', lastName: 'Johnson' },
        { id: 2, firstName: 'Hanh', lastName: 'Le' },
        { id: 3, firstName: 'Jack', lastName: 'Fitchett' },
        { id: 4, firstName: 'Michael', lastName: 'Joseph' },
        { id: 5, firstName: 'Majken', lastName: 'Flores' },
        { id: 6, firstName: 'Steve', lastName: 'Weiss' },
        { id: 7, firstName: 'Nancy', lastName: 'Thomas' },
        { id: 8, firstName: 'Lynn', lastName: 'Hoang' },
        { id: 9, firstName: 'Peter', lastName: 'Michael' },
        { id: 10, firstName: 'Tracy', lastName: 'Scott' },
        { id: 11, firstName: 'Christine', lastName: 'Mobb' },
        { id: 12, firstName: 'Brandon', lastName: 'Le' }
    ];

    //list of object array of student grades/courses
    var studentGrades = [
        {
            id: 1,
            grades:
            [
                { course: 'CPSC 441', grade: 'A' },
                { course: 'CPSC 442', grade: 'B' },
                { course: 'CPSC 443', grade: 'A-' },
            ]
        },
        {
            id: 2,
            grades:
            [
                { course: 'CPSC 541', grade: 'A' },
                { course: 'CPSC 542', grade: 'A' },
                { course: 'CPSC 543', grade: 'A' },
            ]
        },
        {
            id: 3,
            grades:
            [
                { course: 'CPSC 331', grade: 'A' },
                { course: 'CPSC 332', grade: 'A' }
            ]
        },
        {
            id: 4,
            grades:
            [
                { course: 'CPSC 445', grade: 'A' },
                { course: 'CPSC 512', grade: 'B' },
                { course: 'CPSC 543', grade: 'B' },
            ]
        },
        {
            id: 5,
            grades:
            [
                { course: 'CPSC 542', grade: 'A' },
                { course: 'CPSC 543', grade: 'A' },
            ]
        },
        {
            id: 6,
            grades:
            [
                { course: 'CPSC 331', grade: 'B' },
                { course: 'CPSC 332', grade: 'B' },
                { course: 'CPSC 333', grade: 'N' },
            ]
        },
        {
            id: 7,
            grades:
            [
                { course: 'CPSC 258', grade: 'P' },
                { course: 'CPSC 111', grade: 'P' },
                { course: 'CPSC 222', grade: 'N' },
            ]
        },
        {
            id: 8,
            grades:
            [
                { course: 'CPSC 222', grade: 'A' },
                { course: 'CPSC 333', grade: 'A' },
                { course: 'CPSC 444', grade: 'A' },
            ]
        },
        {
            id: 9,
            grades:
            [
                { course: 'CPSC 258', grade: 'A' },
                { course: 'CPSC 852', grade: 'N' }
            ]
        },
        {
            id: 10,
            grades:
            [
                { course: 'CPSC 541', grade: 'A' },
                { course: 'CPSC 542', grade: 'A' },
                { course: 'CPSC 543', grade: 'A' },
            ]
        },
        {
            id: 11,
            grades:
            [
                { course: 'CPSC 555', grade: 'A' },
                { course: 'CPSC 444', grade: 'B' },
                { course: 'CPSC 543', grade: 'B' },
            ]
        },
        {
            id: 12,
            grades:
            [
                { course: 'CPSC 888', grade: 'A' },
                { course: 'CPSC 888', grade: 'B' },
                { course: 'CPSC 444', grade: 'B' },
            ]
        }
    ];

    //get student list array
    var getStudentList = function () {
        return studentList;
    };

    //get student grade list array
    var getStudentGrades = function () {
        return studentGrades;
    };

    //return detail of a given student
    function getStudentById(id) {
        for (var i = 0; i < studentGrades.length; i += 1) {
            if (studentGrades[i].id === id) {
                return studentGrades[i];
            }
        }
        return null;
    };

    // Explicitly reveal public pointers to the private functions
    return {
        getStudentList: getStudentList,
        getStudentGrades: getStudentGrades,
        getStudentById: getStudentById
    }
})();