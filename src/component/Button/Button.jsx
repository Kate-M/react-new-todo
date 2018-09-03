import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/common-style.scss';
import './Button.scss';
/**
 * General component description in JSDoc format. Markdown is *supported*.
 */
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
    /** Description of prop "action". */
    action: PropTypes.oneOf(['edit', 'cancel', 'save', 'delete', 'status-process']),
    /** Description of prop "status". */
    status: PropTypes.string.isRequired,
    /** Description of prop "onActionSubmit". */
    onActionSubmit: PropTypes.func,
};

Button.defaultProps = {
    action: '',
    status: '',
    onActionSubmit: () => { },
};

export default Button;
