import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/common-style.scss';
import './Button.scss';

const Button = ({ action, status, onActionSubmit }) => {
    const onActionCreate = event => onActionSubmit(action, event);

    return (
        <button
            className={`btn btn-sm btn-${action}-item`}
            onClick={onActionCreate}
            {...(status ? { 'data-status': `${status}` } : null)}
        />
    );
};

Button.propTypes = {
    action: PropTypes.string,
    status: PropTypes.string,
    onActionSubmit: PropTypes.func,
};

Button.defaultProps = {
    action: '',
    status: '',
    onActionSubmit: () => { },
};

export default Button;
