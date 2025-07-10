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
var createEmployee = function (salry) {
    if (typeof salry === 'number') {
        if (salry < 500)
            return 'Teacher';
    }
    else {
        return 'Director';
    }
};
console.log(createEmployee(500));
