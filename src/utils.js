export const ngClass = (classesWithConditions) => {
    return Object.keys(classesWithConditions).reduce((acc, cls) => {
        acc += classesWithConditions[cls] ? cls : '';
        return acc;
    }, '');
}

export const addClasses = (...classes) => classes.join(' ');
