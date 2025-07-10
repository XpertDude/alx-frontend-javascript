var StudentClass = /** @class */ (function () {
    function StudentClass(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    StudentClass.prototype.workOnHomework = function () {
        return 'Currently working';
    };
    StudentClass.prototype.displayName = function () {
        return this.firstName;
    };
    return StudentClass;
}());
;
;
var Director = /** @class */ (function () {
    function Director() {
    }
    ;
    Director.prototype.workFromHome = function () {
        return 'Working from home';
    };
    ;
    Director.prototype.getCoffeeBreak = function () {
        return 'Getting a coffee break';
    };
    ;
    Director.prototype.workDirectorTasks = function () {
        return 'Getting to director tasks';
    };
    return Director;
}());
;
var Teacher = /** @class */ (function () {
    function Teacher() {
    }
    ;
    Teacher.prototype.workFromHome = function () {
        return ' Cannot work from home';
    };
    ;
    Teacher.prototype.getCoffeeBreak = function () {
        return 'Cannot have a break';
    };
    ;
    Teacher.prototype.workTeacherTasks = function () {
        return 'Getting to work';
    };
    return Teacher;
}());
;
var createEmployee = function (salary) {
    if (typeof salary === 'number') {
        if (salary < 500)
            return 'Teacher';
        return 'Director';
    }
    return 'Director';
};
console.log(createEmployee(15));
var isDirector = function (employee) {
    var type = createEmployee(employee);
    if (type === 'Director') {
        return true;
    }
    return false;
};
var executeWork = function (employee) {
    if (employee === 'Director')
        return new Director().workDirectorTasks();
    if (employee === 'Teacher')
        return new Teacher().workTeacherTasks();
};
console.log(executeWork(createEmployee(1000)));
var teachClass = function (todayClass) {
    if (todayClass === 'Math')
        return 'Teaching Math';
    if (todayClass === 'History')
        return 'Teaching History';
};
console.log(teachClass('Math'));
