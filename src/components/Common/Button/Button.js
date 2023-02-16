import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ children, onClick, type, disabled, className }) => {
	return (
		<button type={type} onClick={onClick} disabled={disabled} className={className}>
			{children}
		</button>
	);
};

Button.propTypes = {
	children: PropTypes.node.isRequired,
	onClick: PropTypes.func,
	type: PropTypes.oneOf(['button', 'submit', 'reset']),
	disabled: PropTypes.bool,
	className: PropTypes.string,
};

Button.defaultProps = {
	type: 'button',
	disabled: false,
	className: '',
};

export default Button;
