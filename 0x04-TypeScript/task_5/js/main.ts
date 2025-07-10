interface MajorCredits {
    brand: 'Major';
    credits: number;
}

interface MinorCredits {
    brand: 'Minor';
    credits: number;
}


const sumMajorCredits = (subject1: MajorCredits, subject2: MajorCredits): number => {
    const sum: number = subject1.credits + subject2.credits;
    return sum;
}

const sumMinorCredits = (subject1: MinorCredits,subject2: MinorCredits): number => {
    const sum: number = subject1.credits + subject2.credits;
    return sum
}