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
        this.props.onActionSubmit('complete', event);
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
    onActionSubmit: PropTypes.func,
    status: PropTypes.string,
};

Checkbox.defaultProps = {
    onActionSubmit: () => {},
    status: '',
};

export default Checkbox;
