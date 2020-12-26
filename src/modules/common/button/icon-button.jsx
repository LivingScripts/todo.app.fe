import React from 'react';
import './button.styles.scss';
import PropType from 'prop-types';
import { Tooltip } from '../tooltip/';
import { addClasses, conditionalWrapper } from '../../../utils';

const variantTypes = ['icon-only', 'contained'];
const colorTypes = ['primary', 'secondary', 'default'];
const sizeTypes = ['small', 'normal'];

const buttonType = (props) => {
	let variant = '';
	let color = '';
	let size = 'btn-fab';

	if (props.variant === 'icon-only') {
		variant = 'text';
	} else {
		variant = 'contained';
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

	if (props.size === 'small') {
		size = 'btn-fab-sm';
	}

	return addClasses(variant, color, size);
};

export const IconButton = (props) => {
	const classes = buttonType(props);
	const mainButton = (
		<button className={addClasses(classes, 'btn', props.classes)} onClick={props.onClick}>
			{React.Children.only(props.children)}
		</button>
	);
	return conditionalWrapper(
		props.tooltip,
		Tooltip,
		{ render: props.tooltip, placement: props.tooltipPlacement },
		mainButton
	);
};

IconButton.propTypes = {
	variant: PropType.oneOf(variantTypes),
	color: PropType.oneOf(colorTypes),
	size: PropType.oneOf(sizeTypes),
	classes: PropType.string,
	children: PropType.node.isRequired,
	onClick: PropType.func,
	tooltip: PropType.node,
	tooltipPlacement: PropType.string
};

IconButton.defaultProps = {
	variant: 'icon-only',
	color: 'defualt',
	size: 'normal',
	classes: '',
	onClick: () => {},
	tooltipPlacement: 'auto'
};
