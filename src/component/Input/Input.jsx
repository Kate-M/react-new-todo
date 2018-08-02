import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/common-style.scss';
import './Input.scss';

const Input = ({ action, placeholder, optionalClass, value, onTextChange }) => {
    const handleTextChange = (event) => {
        onTextChange(event.target.value);
    };

    return (
        <input
            className={`${optionalClass} ${action}-field`}
            placeholder={placeholder}
            value={value}
            onChange={handleTextChange}
        />
    );
};

Input.propTypes = {
    action: PropTypes.string,
    placeholder: PropTypes.string,
    optionalClass: PropTypes.string,
    value: PropTypes.string,
    onTextChange: PropTypes.func,
};

Input.defaultProps = {
    action: '',
    placeholder: '',
    optionalClass: '',
    value: '',
    onTextChange: () => { },
};

export default Input;
