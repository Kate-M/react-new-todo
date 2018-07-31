import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../../styles/common-style.scss';

class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
            placeholder: 'Add a Task',
        };
        this.handleTextChange = this.handleTextChange.bind(this);
    }
    handleTextChange(e) {
        this.props.onTextChange(e.target.value);
    }
    render() {
        const { action, value } = this.props;
        const { placeholder } = this.state;
        return (
            <input
                className={`control-item ${action}-field`}
                placeholder={placeholder}
                value={value}
                onChange={this.handleTextChange}
            />
        );
    }
}

Input.propTypes = {
    action: PropTypes.string,
    value: PropTypes.string,
    onTextChange: PropTypes.func,
};

Input.defaultProps = {
    action: '',
    value: '',
    onTextChange: () => {},
};

export default Input;
