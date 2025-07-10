interface Teacher {
    firstNmae: string,
    lastName: string,
    fullTimeEmployee: boolean,
    yearsOfExperience: number,
    location: string,
    [key: string]: any
};


const teacher1: Teacher = {
    firstNmae: 'Mohammed',
    lastName: 'Abdo',
    fullTimeEmployee: false,
    yearsOfExperience: 15,
    location: 'Canada'
}


const teacher2: Teacher = {
    firstNmae: 'Soufia',
    lastName: 'Rachak',
    fullTimeEmployee: true,
    yearsOfExperience: 25,
    location: 'Moroccco'
}



interface Directors extends Teacher {
    numberOfReports: number
};


const directo1: Directors = {
    firstNmae: "Yassine",
    lastName: "Amin",
    fullTimeEmployee: true,
    yearsOfExperience: 30,
    location: "morocco",
    numberOfReports: 2,
}

const printTeacher = (first: string, last: string) => {
    return console.log(`${first[0]}. ${last}`);
}


interface printTeacherFunction {
    (firstNmae: string, lastName: string): string;
}

printTeacher(directo1.firstNmae, directo1.lastName);


