import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../../styles/common-style.scss';
import './Checkbox.scss';

class Checkbox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: false,
        };
    }

    handleCheckboxChange = (event) => {
        const { action } = this.props;
        this.props.onActionSubmit(action, event);
    }

    render() {
        const { status } = this.props;
        return (
            <input
                type="checkbox"
                className="btn-status-complete"
                onChange={this.handleCheckboxChange}
                data-checked={status === '2' ? 'checked' : ''}
            />
        );
    }
}

Checkbox.propTypes = {
    action: PropTypes.string,
    status: PropTypes.string,
    onActionSubmit: PropTypes.func,
};

Checkbox.defaultProps = {
    action: '',
    status: '',
    onActionSubmit: () => {},
};

export default Checkbox;
