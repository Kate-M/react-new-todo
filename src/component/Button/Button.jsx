import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/common-style.scss';
import './Button.scss';

const Button = ({ action, onActionSubmit }) => {
    const onActionCreate = event => onActionSubmit(action, event);

    return (
        <button
            className={`btn btn-sm btn-${action}-item`}
            data-state={`${action}-task`}
            onClick={onActionCreate}
        />
    );
};

Button.propTypes = {
    action: PropTypes.string,
    onActionSubmit: PropTypes.func,
};

Button.defaultProps = {
    action: '',
    onActionSubmit: () => { },
};

export default Button;
