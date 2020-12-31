import React, { useState } from 'react';
import './card.styles.scss';
import PropTypes from 'prop-types';
import { IconButton } from '../button/';
import { Menu } from '../menu/';
import { addClasses, ngClass } from '../../../utils';
import { LinearProgressbar } from '../static-linear-progressbar';
import { Tooltip } from '../tooltip';

export const Card = (props) => {
	const [starred, setStarred] = useState(props.starred);
	const toggleStarredProp = () => {
		setStarred(!starred);
	};
	return (
		<div className="card">
			<div className="label-indicator">
			</div>
			<div className="details p-3">
				<div className="card-header">
				<span className="controls push inline">
					<IconButton
						onClick={toggleStarredProp}
						variant="icon-only"
						size="small"
						tooltip="Star this task"
						tooltipPlacement="bottom"
					>
						<i
							className={addClasses('star', ngClass({ 'fal fa-star': !starred, 'fas fa-star': starred }))}
						></i>
					</IconButton>
					<Menu
						classes="ml-1"
						menuItems={[
							{
								label: 'Todo',
								value: 'todo',
								start: <i className="color-default far fa-circle"></i>
							},
							{
								label: 'In Progress',
								value: 'inProgress',
								start: <i className="color-progress far fa-circle"></i>
							},
							{
								label: 'Completed',
								value: 'completed',
								start: <i className="color-success far fa-check-circle"></i>
							},
							{
								label: 'Cancelled',
								value: 'cancelled',
								start: <i className="color-error far fa-times-circle"></i>
							}
						]}
					>
						<IconButton
							variant="icon-only"
							size="small"
							tooltip="Set task progress"
							tooltipPlacement="bottom"
						>
							<i className="far fa-circle"></i>
						</IconButton>
					</Menu>
				</span>
				<Tooltip render="full text" placement="top">
					<span className="title mt-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste sapiente similique possimus rerum facilis veniam voluptates impedit amet voluptatem sed?</span>
				</Tooltip>
			</div>
				<LinearProgressbar
					classes="progress-margins"
					progress={80}
				/>
				<div className="controls push row">
					{/* <div className="control">
						<IconButton variant="icon-only" size="small" tooltip="Start date" tooltipPlacement="bottom">
							<i className="fal fa-calendar-check"></i>
						</IconButton>
					</div>
					<div className="control">
						<IconButton variant="icon-only" size="small" tooltip="End date" tooltipPlacement="bottom">
							<i className="fal fa-calendar-times"></i>
						</IconButton>
					</div> */}
					<div className="control">
						<IconButton variant="icon-only" size="small" tooltip="Sub tasks" tooltipPlacement="bottom">
							<i className="fal fa-tasks"></i>
						</IconButton>
						<span className="count">0</span>
					</div>
					<div className="control">
						<IconButton variant="icon-only" size="small" tooltip="Attachments" tooltipPlacement="bottom">
							<i className="fal fa-paperclip"></i>
						</IconButton>
						<span className="count">0</span>
					</div>
				</div>
			</div>
		</div>
	);
};

Card.propTypes = {
	starred: PropTypes.bool.isRequired
};

Card.defaultProps = {
	starred: false
};
