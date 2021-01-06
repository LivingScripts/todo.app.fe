import React from 'react';
import './label.styles.scss';
import { Button, IconButton } from '../../common/button/';
import PropTypes from 'prop-types';
import { ngIf } from '../../../utils';
import { Input } from '../../common/input';

const LabelItem = (props) => {
  const [editing, setEditing] = React.useState(false);

  return (
    <div className="label-item mt-3">
      <div className="label-text mr-2">
        {
          ngIf(
            editing,
            <Input value="label 1" />,
            'Lable 1'
          )
        }
      </div>
      <div className="label-controls">
        {
          ngIf(
            editing,
            <>
              <IconButton
                classes="color-success success-btn"
                variant="icon-only"
                size="small"
                onClick={() => setEditing(false)}
                tooltip="Save changes"
                tooltipPlacement="bottom"
              >
                <i className="far fa-check"></i>
              </IconButton>
              <IconButton
                classes="danger-btn"
                variant="icon-only"
                size="small"
                onClick={() => setEditing(false)}
                tooltip="Delete label"
                tooltipPlacement="bottom"
              >
                <i className="far fa-trash"></i>
              </IconButton>
            </>,
            <IconButton
              variant="icon-only"
              size="small"
              onClick={() => setEditing(true)}
              tooltip="Edit label properties"
              tooltipPlacement="bottom"
            >
              <i className="far fa-pen"></i>
            </IconButton>
          )
        }
      </div>
    </div>
  );
};

export const LabelPopup = (props) => {
  return (
    <div className="card-template p-4">
      <h6>Your Labels Collection</h6>
      <div className="content mt-2 mb-2">
        <LabelItem></LabelItem>
        <LabelItem></LabelItem>
        <LabelItem></LabelItem>
        <LabelItem></LabelItem>
      </div>
      <div className="controls">
        <Button
          variant="text"
          color="default"
        >Done</Button>
      </div>
    </div>
  );
};
