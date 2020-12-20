export const ngClass = (classesWithConditions) => {
    return Object.keys(classesWithConditions).reduce((acc, cls) => {
        acc += classesWithConditions[cls] ? cls : '';
        return acc;
    }, '');
}

export const ngIf = (predicate, component) => {
    return predicate ? component : null;
};

export const addClasses = (...classes) => classes.join(' ');
