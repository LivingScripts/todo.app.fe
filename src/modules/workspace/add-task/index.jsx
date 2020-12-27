import React from 'react';
import './addtask.styles.scss';
import { useClickAway } from '../../common/hooks/';
import { IconButton } from '../../common/button/';
import { addClasses, ngClass, ngIf } from '../../../utils';
import { usePopper } from 'react-popper';

export const AddTask = (props) => {
    const [newTaskInputActive, setNewTaskInputActive] = React.useState(false);
    const [newTaskInputRef, setNewTaskInputRef] = React.useState(null);
    const [inputVal, setInputVal] = React.useState(null);
    const [error, setError] = React.useState(false);
    const [errorPopperRef, setErrorPopperRef] = React.useState(null);
    const maxInputLength = 80;

    const onInputChange = event => {
        const { value } = event.target;
        if (value.length < maxInputLength) {
            setInputVal(value);
            error && setError(false);
        } else {
            setError(true);
        }
    };

    const { styles, attributes } = usePopper(newTaskInputRef, errorPopperRef, {
        placement: 'bottom-start'
    });

    const placeholder = (
        <span className="placeholder font-lg-size p-2" onClick={() => setNewTaskInputActive(true)}>
            <i className="color-success far fa-plus"></i>
            <span className="ml-3">Add New Task</span>
        </span>
    );

    useClickAway(newTaskInputRef, () => setNewTaskInputActive(false));

    const newTaskInput = (
        <>
            <input
                className={ngClass({ 'color-error': error, 'font-lg-size color p-2 pr-4': true })}
                type="text"
                autoFocus
                onInput={onInputChange}
            />
            <span className="font-md-size push-away">
                Press Enter to Add
                <IconButton
                    variant="icon-only"
                    size="small"
                    onClick={() => setNewTaskInputActive(false)}
                >
                    <i className="fal fa-times"></i>
                </IconButton>
            </span>
        </>
    );

    return (
        <>
            <div
                className={ngClass({ error, 'add-task push-away': true })}
                ref={setNewTaskInputRef}
            >
                { ngIf(newTaskInputActive, newTaskInput, placeholder) }
            </div>
            { ngIf(error, <span
                    ref={setErrorPopperRef}
                    className="error-msg color-error font-md-size p-2"
                    styles={styles.popper}
                    {...attributes.popper}
                >Please enter less than 80 characters</span>
            ) }
        </>
    );
};
