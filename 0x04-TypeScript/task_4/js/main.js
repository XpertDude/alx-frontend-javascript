/// <reference path="./subjects/Cpp.ts" />
/// <reference path="./subjects/Java.ts" />
/// <reference path="./subjects/React.ts" />
var cpp = new Subjects.Cpp();
var java = new Subjects.Java();
var react = new Subjects.React();
var cTeacher = {
    firstName: 'Yassine',
    lastName: 'rafik',
    experienceTeachingC: 10
};
console.log('C++');
cpp.setTeacher(cTeacher);
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());
