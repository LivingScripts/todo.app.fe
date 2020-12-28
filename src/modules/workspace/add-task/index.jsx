import React from 'react';
import './addtask.styles.scss';
import { IconButton } from '../../common/button/';
import { ngClass, ngIf } from '../../../utils';
import { usePopper } from 'react-popper';
import { useClickAway } from '../../common/hooks/';

export const AddTask = (props) => {
    const [taskInputActive, setTaskInputActive] = React.useState(false);
    const [inputVal, setInputVal] = React.useState(null);
    const [error, setError] = React.useState(false);
    const taskInputRef = React.useRef(null);
    const errorPopperRef = React.useRef(null);
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

    const { styles, attributes } = usePopper(taskInputRef.current, errorPopperRef.current, {
        placement: 'bottom-start'
    });

    const placeholder = (
        <span className="placeholder font-lg-size p-2" onClick={() => setTaskInputActive(true)}>
            <i className="color-success far fa-plus"></i>
            <span className="ml-3">Add New Task</span>
        </span>
    );

    useClickAway(taskInputRef, () => setTaskInputActive(false));

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
                    onClick={() => setTaskInputActive(false)}
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
                ref={taskInputRef}
            >
                { ngIf(taskInputActive, newTaskInput, placeholder) }
            </div>
            { ngIf(error, <span
                    ref={errorPopperRef}
                    className="error-msg color-error font-md-size p-2"
                    styles={styles.popper}
                    {...attributes.popper}
                >Please enter less than 80 characters</span>
            ) }
        </>
    );
};
