import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/common-style.scss';
import './Button.scss';

const Button = ({ action, onActionSubmit2 }) => {
    const onActionCreate = event => onActionSubmit2(action, event);

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
    onActionSubmit2: PropTypes.func,
};

Button.defaultProps = {
    action: '',
    onActionSubmit2: () => { },
};

export default Button;
