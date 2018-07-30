import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../../styles/common-style.scss';

class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'Add a Task',
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        // this.setState({ value: event.target.value });
        this.props.updateData(event.target.value);
    }
    render() {
        // const { value } = this.state;
        const { action } = this.props;
        return (
            <div>
                <input className={`control-item ${action}-field`} placeholder={this.state.value} onChange={this.handleChange} />
            </div>
        );
    }
}

Input.propTypes = {
    action: PropTypes.string,
    updateData: PropTypes.func,
};

Input.defaultProps = {
    action: '',
    updateData: () => {},
};

export default Input;
