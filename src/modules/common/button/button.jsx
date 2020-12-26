import React from 'react';
import './button.styles.scss';
import PropType from 'prop-types';
import { Tooltip } from '../tooltip/';
import { addClasses, conditionalWrapper } from '../../../utils';

const variantTypes = ['contained', 'outlined', 'text'];
const colorTypes = ['primary', 'secondary', 'default'];

const buttonType = (props) => {
	let variant = '';
	let color = '';
	switch (props.variant) {
		case 'contained':
			break;
		case 'outlined':
			variant = 'outlined';
			break;
		default:
			variant = 'text';
			break;
	}

	switch (props.color) {
		case 'primary':
			color = 'primary';
			break;
		case 'secondary':
			color = 'secondary';
			break;
		default:
			color = 'default';
			break;
	}

	return addClasses(variant, color);
};

export const Button = (props) => {
	const classes = buttonType(props);
	const mainButton = (
		<button className={addClasses(classes, 'btn btn-full', props.classes)} onClick={props.onClick}>
			{props.startIcon && <span>{props.startIcon}</span>}
			{props.children}
			{props.endIcon && <span>{props.endIcon}</span>}
		</button>
	);
	return conditionalWrapper(
		props.tooltip,
		Tooltip,
		{ render: props.tooltip, placement: props.tooltipPlacement },
		mainButton
	);
};

Button.propTypes = {
	startIcon: PropType.elementType,
	endIcon: PropType.elementType,
	children: PropType.node.isRequired,
	variant: PropType.oneOf(variantTypes),
	color: PropType.oneOf(colorTypes),
	classes: PropType.string,
	onClick: PropType.func,
	tooltip: PropType.node,
	tooltipPlacement: PropType.string
};

Button.defaultProps = {
	startIcon: null,
	endIcon: null,
	variant: 'text',
	color: 'default',
	classes: '',
	onClick: () => {},
	tooltipPlacement: 'auto'
};
