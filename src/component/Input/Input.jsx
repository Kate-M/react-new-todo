import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../../styles/common-style.scss';
import './Input.scss';

class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
            placeholder: 'Add a Task',
        };
    }

    handleTextChange = (event) => {
        this.props.onTextChange(event.target.value);
    }

    render() {
        const { action, optionalClass, value } = this.props;
        const { placeholder } = this.state;
        return (
            <input
                className={`${optionalClass} ${action}-field`}
                placeholder={placeholder}
                value={value}
                onChange={this.handleTextChange}
            />
        );
    }
}

Input.propTypes = {
    action: PropTypes.string,
    optionalClass: PropTypes.string,
    value: PropTypes.string,
    onTextChange: PropTypes.func,
};

Input.defaultProps = {
    action: '',
    optionalClass: '',
    value: '',
    onTextChange: () => {},
};

export default Input;
