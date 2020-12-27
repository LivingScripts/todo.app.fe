import React from 'react';
import './workspace.styles.scss';
import { AddTask } from './add-task/';

export const Workspace = (props) => {
    return (
        <div className="workspace-container">
            <AddTask/>
        </div>
    );
};
