function finalGrade(exam, projects) {
    let finalGrade = '';

    if (exam > 90 || projects > 10) {
        finalGrade = 100;
    }
    else if (exam > 75 && projects >= 5) {
        finalGrade = 90;
    }
    else if (exam > 50 && projects >= 2) {
        finalGrade = 75;
    }
    else finalGrade = 0;


    return finalGrade;
}

// 100, if a grade for the exam is more than 90 or if a number of completed projects more than 10.
// 90, if a grade for the exam is more than 75 and if a number of completed projects is minimum 5.
// 75, if a grade for the exam is more than 50 and if a number of completed projects is minimum 2.
// 0, in other cases