import React from 'react';
import './workspace.styles.scss';
import { AddTask } from './add-task/';
import { Card } from '../common/card/';

export const Workspace = (props) => {
    return (
        <div className="workspace-container">
            <AddTask/>
            <Card></Card>
        </div>
    );
};
