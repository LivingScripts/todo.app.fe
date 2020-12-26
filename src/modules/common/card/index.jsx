import React, { useState } from 'react';
import './card.styles.scss';
import PropTypes from 'prop-types';
import { IconButton } from '../button/';
import { Menu } from '../menu/';
import { addClasses, ngClass } from '../../../utils';

export const Card = (props) => {
    const [starred, setStarred] = useState(props.starred);
	const toggleStarredProp = () => {
		setStarred(!starred);
	};
	return (
		<div className="card">
			<div className="card-header p-2">
				<div className="push-away mb-1">
					<span className="id">000001</span>
					<span className="controls">
						<IconButton
							onClick={toggleStarredProp}
							variant="icon-only"
							size="small"
							tooltip="Star this task"
							tooltipPlacement="bottom"
						>
							<i
								className={addClasses(
									'star',
									ngClass({ 'fal fa-star': !starred, 'fas fa-star': starred })
								)}
							></i>
						</IconButton>
						<Menu
							classes="ml-1"
							menuItems={[
								{ label: 'Critical', value: 'critical' },
								{ label: 'High', value: 'high' },
								{ label: 'Medium', value: 'medium' },
								{ label: 'low', value: 'low' }
							]}
						>
							<IconButton
								variant="icon-only"
								size="small"
								tooltip="Set task priority"
								tooltipPlacement="bottom"
							>
								<i className="fal fa-flag"></i>
							</IconButton>
						</Menu>
						<Menu
							classes="ml-1"
							menuItems={[
								{ label: 'Todo', value: 'todo' },
								{ label: 'In Progress', value: 'inProgress' },
								{ label: 'Completed', value: 'completed' },
								{ label: 'Cancelled', value: 'cancelled' }
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
				</div>
				<span className="title">my first Task</span>
			</div>
			<p className="description m-2 mb-4">
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est culpa sequi ratione error, asperiores
				necessitatibus mollitia repellendus ex nulla eius qui dolorum! Quia maiores fugit delectus, optio
				deserunt quasi earum distinctio totam sequi error obcaecati voluptatem temporibus, porro molestias neque
				ab! Reiciendis, enim ullam, tempore suscipit consequatur distinctio voluptates dolorem praesentium
				facilis labore, iure sapiente eveniet? Non veritatis culpa, dolore repellat eaque, porro aliquid
				possimus odio blanditiis saepe molestiae repudiandae in aliquam vel praesentium ipsum at doloremque
				officia placeat unde repellendus enim ex nulla. Facilis cumque, nam mollitia dolore repudiandae
				necessitatibus voluptate, alias laborum animi pariatur quia sapiente esse similique.
			</p>
			<div className="progress-bar-container pl-4 pr-4">
				<div></div>
			</div>
			<div className="controls p-2 push-away">
				<div className="control">
					<IconButton
						variant="icon-only"
						size="small"
						tooltip="Start date"
						tooltipPlacement="bottom"
					>
						<i className="fal fa-calendar-check"></i>
					</IconButton>
				</div>
				<div className="control">
					<IconButton
						variant="icon-only"
						size="small"
						tooltip="End date"
						tooltipPlacement="bottom"
					>
						<i className="fal fa-calendar-times"></i>
					</IconButton>
				</div>
				<div className="control">
					<IconButton
						variant="icon-only"
						size="small"
						tooltip="Sub tasks"
						tooltipPlacement="bottom"
					>
						<i className="fal fa-tasks"></i>
					</IconButton>
					<span className="count">0</span>
				</div>
				<div className="control">
					<IconButton
						variant="icon-only"
						size="small"
						tooltip="Attachments"
						tooltipPlacement="bottom"
					>
						<i className="fal fa-paperclip"></i>
					</IconButton>
					<span className="count">0</span>
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
