import { createElement } from 'react';

export const ngClass = (classesWithConditions) => {
    const applicableClasses = Object.keys(classesWithConditions).reduce((acc, cls) => {
        acc.push(classesWithConditions[cls] ? cls : '');
        return acc;
    }, []);
    return applicableClasses.join(' ');
};

export const ngIf = (predicate, component, fallback = null) => {
    return predicate ? component : fallback;
};

export const addClasses = (...classes) => classes.join(' ');

export const conditionalWrapper = (predicate, wrapperComponent, wrapperProps, children) => {
    if (predicate) {
        return createElement(wrapperComponent, wrapperProps, children);
    }
    return children;
};
