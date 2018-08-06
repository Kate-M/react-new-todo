import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/common-style.scss';
import './Button.scss';

const Button = ({ action, status, onActionSubmit }) => {
    const onActionCreate = event => onActionSubmit(action, event);

    return (
        <button
            className={`btn btn-sm btn-${action}`}
            onClick={onActionCreate}
            {...(status ? { 'data-status': `${status}` } : null)}
        />
    );
};

Button.propTypes = {
    action: PropTypes.oneOf(['edit', 'cancel', 'save', 'delete', 'status-process']),
    status: PropTypes.string.isRequired,
    onActionSubmit: PropTypes.func,
};

Button.defaultProps = {
    action: '',
    status: '',
    onActionSubmit: () => { },
};

export default Button;
