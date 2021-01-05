import React from 'react';
import './stats.styles.scss';
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export const Stats = (props) => {
  const progressIndicatorText = (count) => {
    return (
      <div className="progress-indicator">
        <span className="count mb-1">{count}</span>
        <span className="text">Left</span>
      </div>
    );
  };
  return (
    <>
      <div className="view push-away">
        <div className="progressbar">
          <h4 className="mb-4">Weekly Stats</h4>
          <div className="progress-container">
            <CircularProgressbarWithChildren
              value={0.66}
              maxValue={1}
              strokeWidth={3}
              styles={buildStyles({
                trailColor: 'transparent'
              })}
            >
              {progressIndicatorText(4)}
            </CircularProgressbarWithChildren>
          </div>
        </div>
        <div className="stats pl-2 pr-2">
          <div className="stat">
            <span className="count font-lg-size">4</span>
            <span className="title">To do</span>
          </div>
          <div className="stat">
            <span className="count font-lg-size">2</span>
            <span className="title">Late</span>
          </div>
          <div className="stat">
            <span className="count font-lg-size">12</span>
            <span className="title">Done</span>
          </div>
        </div>
      </div>
      <div className="view push-away">
        <div className="progressbar">
          <h4 className="mb-4">Monthly Stats</h4>
          <div className="progress-container">
            <CircularProgressbarWithChildren
              value={0.66}
              maxValue={1}
              strokeWidth={3}
              styles={buildStyles({
                trailColor: 'transparent'
              })}
            >
              {progressIndicatorText(15)}
            </CircularProgressbarWithChildren>
          </div>
        </div>
        <div className="stats">
          <div className="stat">
            <span className="count font-lg-size">12</span>
            <span className="title">To do</span>
          </div>
          <div className="stat">
            <span className="count font-lg-size">5</span>
            <span className="title">Late</span>
          </div>
          <div className="stat">
            <span className="count font-lg-size">30</span>
            <span className="title">Done</span>
          </div>
        </div>
      </div>
    </>
  );
};
