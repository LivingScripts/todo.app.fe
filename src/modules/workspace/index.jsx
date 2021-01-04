import React from 'react';
import './workspace.styles.scss';
import { AddTask } from './add-task/';
import { Card } from '../common/card/';
import { CalendarColumn } from '../calendar-column';
import { Stats } from '../stats-column';

export const Workspace = (props) => {
  return (
    <div className="workspace-container">
      <div className="grid-row mt-4">
        <div className="grid-column">
          <CalendarColumn />
        </div>
        <div className="grid-column">
          <div className="mb-4">
            <Card></Card>
          </div>
          <div className="mb-4">
            <Card></Card>
          </div>
          <div className="mb-4">
            <Card></Card>
          </div>
          <div className="mb-4">
            <Card></Card>
          </div>
        </div>
        <div className="grid-column">
          <Stats />
        </div>
      </div>
    </div>
  );
};
