interface StudentInterface {
    workOnHomework(): string;
    displayName(): string;
}

interface StudentConstructor {
    new(firstName: string, lastName: string): StudentInterface;
}

class StudentClass implements StudentInterface {
    constructor(public firstName: string, public lastName: string) { }

    workOnHomework(): string {
        return 'Currently working'
    }

    displayName(): string {
        return this.firstName
    }
}

interface DirectorInterface {
    workFromHome(): string,
    getCoffeeBreak(): string,
    workDirectorTasks(): string
};


interface TeacherInterface {
    workFromHome(): string, 
    getCoffeeBreak(): string,
    workTeacherTasks(): string
};


class Director implements DirectorInterface {
    constructor(){};
    workFromHome(): string {
        return 'Working from home'
    };

    getCoffeeBreak(): string {
        return 'Getting a coffee break'
    };

    workDirectorTasks(): string {
        return 'Getting to director tasks'
    }
};

class Teacher implements TeacherInterface {
    constructor(){};
    workFromHome(): string {
        return ' Cannot work from home'
    };

    getCoffeeBreak(): string {
        return 'Cannot have a break'
    };

    workTeacherTasks(): string {
        return 'Getting to work'
    }
};

const createEmployee = (salary: number | string) => {
    if (typeof salary === 'number') {
        if (salary < 500) return  'Teacher';
        return  'Director';
    }
    return 'Director';
};


console.log(createEmployee(15));

const isDirector = (employee: string | number): boolean => {
    const type = createEmployee(employee)
    if (type === 'Director') {
        return true
    }

    return false
};


const executeWork = (employee: string): string => {
    if(employee === 'Director') return new Director().workDirectorTasks();
    if(employee === 'Teacher') return new Teacher().workTeacherTasks();
}

console.log(executeWork(createEmployee(1000)));

type Subjects = 'Math' | 'History';

const teachClass = (todayClass: string): string => {
    if(todayClass === 'Math') return 'Teaching Math';
    if(todayClass === 'History') return 'Teaching History';
}

console.log(teachClass('Math'));
