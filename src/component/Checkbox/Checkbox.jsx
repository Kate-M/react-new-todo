import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { statusOfTask as STATUS } from '../status';
import '../../styles/common-style.scss';
import './Checkbox.scss';

/**
 * The only true button.
 *
 * @visibleName Checkbox 🐙
 */
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
                data-checked={status === STATUS.COMPLETE ? 'checked' : ''}
            />
        );
    }
}

Checkbox.propTypes = {
    action: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    onActionSubmit: PropTypes.func,
};

Checkbox.defaultProps = {
    action: 'status-complete',
    status: STATUS.DEFAULT,
    onActionSubmit: () => {},
};

export default Checkbox;
